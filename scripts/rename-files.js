#!/usr/bin/env node

/**
 * File Renaming Script
 * 
 * Renames EPUB and PDF files to clean kebab-case format
 * Updates JSON index automatically
 * 
 * Usage:
 *   node scripts/rename-files.js          # Dry run
 *   node scripts/rename-files.js --apply  # Apply changes
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createInterface } from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '../src/assets');
const COVERS_DIR = path.join(__dirname, '../public/covers');
const INDEX_FILE = path.join(__dirname, '../public/covers/index.json');

/**
 * Remove accents from string
 */
function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/**
 * Convert to kebab-case
 */
function toKebabCase(str) {
  return removeAccents(str)
    .toLowerCase()
    .trim()
    // Remove content in parentheses/brackets
    .replace(/\([^)]*\)/g, '')
    .replace(/\[[^\]]*\]/g, '')
    // Replace special characters and spaces with hyphens
    .replace(/[^a-z0-9]+/g, '-')
    // Remove leading/trailing hyphens
    .replace(/^-+|-+$/g, '')
    // Collapse multiple hyphens
    .replace(/-+/g, '-');
}

/**
 * Generate new filename
 */
function generateKebabFilename(originalFilename) {
  const ext = path.extname(originalFilename);
  const nameWithoutExt = path.basename(originalFilename, ext);
  const kebabName = toKebabCase(nameWithoutExt);
  return kebabName + ext.toLowerCase();
}

/**
 * Scan and generate rename operations
 */
async function scanFiles() {
  const files = await fs.readdir(ASSETS_DIR);
  const bookFiles = files.filter(file => 
    file.endsWith('.epub') || file.endsWith('.pdf')
  );

  const operations = [];

  for (const file of bookFiles) {
    const newFilename = generateKebabFilename(file);
    
    if (file !== newFilename) {
      operations.push({
        oldPath: path.join(ASSETS_DIR, file),
        newPath: path.join(ASSETS_DIR, newFilename),
        oldName: file,
        newName: newFilename,
        oldBaseName: path.basename(file, path.extname(file)),
        newBaseName: path.basename(newFilename, path.extname(newFilename))
      });
    }
  }

  return operations;
}

/**
 * Display operations
 */
function displayOperations(operations) {
  if (operations.length === 0) {
    console.log('\n✅ All files already in kebab-case format!\n');
    return;
  }

  console.log('\n📚 Proposed Rename Operations:\n');
  console.log('='.repeat(80));

  operations.forEach((op, index) => {
    console.log(`\n${index + 1}. ${op.oldName}`);
    console.log(`   → ${op.newName}`);
  });

  console.log('\n' + '='.repeat(80));
  console.log(`\nTotal: ${operations.length} file(s) to rename\n`);
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

  console.log(`\n📁 Renaming complete! ${successCount} renamed, ${failCount} failed.\n`);
  return successCount > 0;
}

/**
 * Update cover files
 */
async function updateCoverFiles(operations) {
  console.log('\n🖼️  Updating cover files...\n');

  let updatedCount = 0;

  for (const op of operations) {
    const extensions = ['jpg', 'jpeg', 'png', 'svg'];
    
    for (const ext of extensions) {
      const oldCoverPath = path.join(COVERS_DIR, `${op.oldBaseName}.${ext}`);
      const newCoverPath = path.join(COVERS_DIR, `${op.newBaseName}.${ext}`);
      
      try {
        await fs.access(oldCoverPath);
        await fs.rename(oldCoverPath, newCoverPath);
        console.log(`✅ Renamed cover: ${op.oldBaseName}.${ext} → ${op.newBaseName}.${ext}`);
        updatedCount++;
      } catch {
        // File doesn't exist, skip
      }
    }
  }

  console.log(`\n📸 Updated ${updatedCount} cover file(s)\n`);
}

/**
 * Generate cover index JSON
 */
async function generateCoverIndex() {
  console.log('\n📋 Generating cover index...\n');

  try {
    const coverFiles = await fs.readdir(COVERS_DIR);
    const covers = {};

    for (const file of coverFiles) {
      if (file === 'index.json') continue;
      
      const ext = path.extname(file);
      if (['.jpg', '.jpeg', '.png', '.svg'].includes(ext.toLowerCase())) {
        const baseName = path.basename(file, ext);
        covers[baseName] = {
          filename: file,
          path: `/covers/${file}`,
          format: ext.substring(1),
        };
      }
    }

    const indexData = {
      generated: new Date().toISOString(),
      count: Object.keys(covers).length,
      covers
    };

    await fs.writeFile(INDEX_FILE, JSON.stringify(indexData, null, 2));
    console.log(`✅ Generated index with ${Object.keys(covers).length} covers`);
    console.log(`   📁 Saved to: ${INDEX_FILE}\n`);

  } catch (error) {
    console.error(`❌ Error generating index: ${error.message}\n`);
  }
}

/**
 * Ask for confirmation
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
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  const applyChanges = args.includes('--apply');

  console.log('📖 File Renaming Script - Kebab Case Converter');
  console.log('='.repeat(80));

  try {
    await fs.access(ASSETS_DIR);

    console.log(`\n🔍 Scanning ${ASSETS_DIR}...\n`);
    const operations = await scanFiles();

    displayOperations(operations);

    if (operations.length === 0) {
      // Still generate index even if no renames needed
      await generateCoverIndex();
      return;
    }

    if (applyChanges) {
      const confirmed = await askConfirmation();

      if (confirmed) {
        const renamed = await applyOperations(operations);
        
        if (renamed) {
          await updateCoverFiles(operations);
          await generateCoverIndex();
        }
      } else {
        console.log('\n❌ Operation cancelled.\n');
      }
    } else {
      console.log('💡 This was a DRY RUN. No files were renamed.');
      console.log('   To apply changes, run: node scripts/rename-files.js --apply\n');
    }

  } catch (error) {
    console.error(`\n❌ Error: ${error.message}\n`);
    process.exit(1);
  }
}

// Run the script
main();

