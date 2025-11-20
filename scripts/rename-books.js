#!/usr/bin/env node

/**
 * Book File Renaming Script
 * 
 * Renames EPUB and PDF files to format: author-title-year.ext
 * 
 * Usage:
 *   node scripts/rename-books.js          # Dry run (preview only)
 *   node scripts/rename-books.js --apply  # Actually rename files
 */

import fs from 'fs/promises';
import path from 'path';
import { createInterface } from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory containing the books
const ASSETS_DIR = path.join(__dirname, '../src/assets');

/**
 * Normalize a string for filename use
 */
function normalizeString(str) {
  if (!str) return '';
  
  return str
    .toLowerCase()
    .trim()
    // Remove content in parentheses/brackets
    .replace(/\([^)]*\)/g, '')
    .replace(/\[[^\]]*\]/g, '')
    // Remove special words
    .replace(/\b(copy|final|draft|version|v\d+)\b/gi, '')
    // Replace special characters with hyphens
    .replace(/[^a-z0-9]+/g, '-')
    // Remove leading/trailing hyphens
    .replace(/^-+|-+$/g, '')
    // Collapse multiple hyphens
    .replace(/-+/g, '-');
}

/**
 * Extract metadata from filename as fallback
 */
function extractFromFilename(filename) {
  // Remove extension
  const nameWithoutExt = filename.replace(/\.(pdf|epub)$/i, '');
  
  let author = '';
  let title = '';
  let year = '';
  
  // Look for year (4 digits)
  const yearMatch = nameWithoutExt.match(/\b(19|20)\d{2}\b/);
  if (yearMatch) {
    year = yearMatch[0];
  }
  
  // Try to split by common separators
  if (nameWithoutExt.includes(' - ')) {
    const parts = nameWithoutExt.split(' - ');
    title = parts[0].trim();
    author = parts[1] ? parts[1].trim() : '';
  } else if (nameWithoutExt.includes('_ ')) {
    const parts = nameWithoutExt.split('_ ');
    title = parts[0].trim();
    author = parts[1] ? parts[1].trim() : '';
  } else {
    title = nameWithoutExt;
  }
  
  return { author, title, year };
}

/**
 * Extract metadata from PDF (basic, without external library)
 */
async function getPdfMetadata(filePath) {
  try {
    const buffer = await fs.readFile(filePath);
    const text = buffer.toString('latin1');
    
    let title = '';
    let author = '';
    let year = '';
    
    // Try to find Title
    const titleMatch = text.match(/\/Title\s*\(([^)]+)\)/);
    if (titleMatch) {
      title = titleMatch[1].replace(/\\[0-9]{3}/g, '').trim();
    }
    
    // Try to find Author
    const authorMatch = text.match(/\/Author\s*\(([^)]+)\)/);
    if (authorMatch) {
      author = authorMatch[1].replace(/\\[0-9]{3}/g, '').trim();
    }
    
    // Try to find Year in metadata or content
    const yearMatch = text.match(/\/(CreationDate|ModDate)\s*\(D:(\d{4})/);
    if (yearMatch) {
      year = yearMatch[2];
    }
    
    return { title, author, year };
  } catch (error) {
    console.error(`Error reading PDF metadata: ${error.message}`);
    return { title: '', author: '', year: '' };
  }
}

/**
 * Extract metadata from EPUB (basic, without external library)
 */
async function getEpubMetadata(filePath) {
  try {
    const buffer = await fs.readFile(filePath);
    const text = buffer.toString('utf8');
    
    let title = '';
    let author = '';
    let year = '';
    
    // EPUB uses XML, look for common tags
    const titleMatch = text.match(/<dc:title[^>]*>([^<]+)<\/dc:title>/i);
    if (titleMatch) {
      title = titleMatch[1].trim();
    }
    
    const authorMatch = text.match(/<dc:creator[^>]*>([^<]+)<\/dc:creator>/i);
    if (authorMatch) {
      author = authorMatch[1].trim();
    }
    
    const dateMatch = text.match(/<dc:date[^>]*>(\d{4})/i);
    if (dateMatch) {
      year = dateMatch[1];
    }
    
    return { title, author, year };
  } catch (error) {
    console.error(`Error reading EPUB metadata: ${error.message}`);
    return { title: '', author: '', year: '' };
  }
}

/**
 * Generate new filename from metadata
 */
function generateNewFilename(metadata, originalFilename) {
  const ext = path.extname(originalFilename);
  
  // Get metadata from file or fallback to filename parsing
  let { author, title, year } = metadata;
  
  // If no metadata found, parse from filename
  if (!author && !title) {
    const fallback = extractFromFilename(originalFilename);
    author = fallback.author;
    title = fallback.title;
    year = year || fallback.year;
  }
  
  // Normalize components
  const authorNorm = normalizeString(author);
  const titleNorm = normalizeString(title);
  const yearNorm = year || '';
  
  // Build filename: author-title-year.ext
  let parts = [];
  if (authorNorm) parts.push(authorNorm);
  if (titleNorm) parts.push(titleNorm);
  if (yearNorm) parts.push(yearNorm);
  
  // If nothing was extracted, use original normalized
  if (parts.length === 0) {
    parts.push(normalizeString(path.basename(originalFilename, ext)));
  }
  
  return parts.join('-') + ext;
}

/**
 * Scan directory and generate rename operations
 */
async function scanAndGenerateOperations() {
  const files = await fs.readdir(ASSETS_DIR);
  const operations = [];
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    
    // Only process PDF and EPUB files
    if (ext !== '.pdf' && ext !== '.epub') {
      continue;
    }
    
    const filePath = path.join(ASSETS_DIR, file);
    
    // Extract metadata
    let metadata;
    if (ext === '.pdf') {
      metadata = await getPdfMetadata(filePath);
    } else if (ext === '.epub') {
      metadata = await getEpubMetadata(filePath);
    }
    
    // Generate new filename
    const newFilename = generateNewFilename(metadata, file);
    
    // Only add operation if name actually changes
    if (file !== newFilename) {
      operations.push({
        oldPath: filePath,
        newPath: path.join(ASSETS_DIR, newFilename),
        oldName: file,
        newName: newFilename,
        metadata
      });
    }
  }
  
  return operations;
}

/**
 * Display operations in a formatted table
 */
function displayOperations(operations) {
  if (operations.length === 0) {
    console.log('\n✅ All files already follow the naming convention!\n');
    return;
  }
  
  console.log('\n📚 Proposed Rename Operations:\n');
  console.log('=' .repeat(100));
  
  operations.forEach((op, index) => {
    console.log(`\n${index + 1}. ${op.oldName}`);
    console.log(`   → ${op.newName}`);
    if (op.metadata.author || op.metadata.title) {
      console.log(`   Metadata: ${op.metadata.author || '(no author)'} - ${op.metadata.title || '(no title)'} ${op.metadata.year ? `(${op.metadata.year})` : ''}`);
    }
  });
  
  console.log('\n' + '='.repeat(100));
  console.log(`\nTotal: ${operations.length} file(s) to rename\n`);
}

/**
 * Ask for user confirmation
 */
async function askConfirmation() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  return new Promise((resolve) => {
    rl.question('Proceed with renaming? (yes/no): ', (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y');
    });
  });
}

/**
 * Apply rename operations
 */
async function applyOperations(operations) {
  let successCount = 0;
  let failCount = 0;
  
  console.log('\n🔄 Renaming files...\n');
  
  for (const op of operations) {
    try {
      await fs.rename(op.oldPath, op.newPath);
      console.log(`✅ ${op.oldName} → ${op.newName}`);
      successCount++;
    } catch (error) {
      console.error(`❌ Failed to rename ${op.oldName}: ${error.message}`);
      failCount++;
    }
  }
  
  console.log(`\n✨ Complete! ${successCount} renamed, ${failCount} failed.\n`);
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  const applyChanges = args.includes('--apply');
  
  console.log('📖 Book File Renaming Script');
  console.log('=' .repeat(100));
  
  try {
    // Check if directory exists
    await fs.access(ASSETS_DIR);
    
    // Scan and generate operations
    console.log(`\n🔍 Scanning ${ASSETS_DIR}...\n`);
    const operations = await scanAndGenerateOperations();
    
    // Display proposed changes
    displayOperations(operations);
    
    if (operations.length === 0) {
      return;
    }
    
    // If --apply flag is set, ask for confirmation and apply
    if (applyChanges) {
      const confirmed = await askConfirmation();
      
      if (confirmed) {
        await applyOperations(operations);
      } else {
        console.log('\n❌ Operation cancelled.\n');
      }
    } else {
      console.log('💡 This was a DRY RUN. No files were renamed.');
      console.log('   To apply changes, run: node scripts/rename-books.js --apply\n');
    }
    
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}\n`);
    process.exit(1);
  }
}

// Run the script
main();
