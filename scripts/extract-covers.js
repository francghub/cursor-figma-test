#!/usr/bin/env node

/**
 * EPUB Cover Extractor
 * 
 * Extracts cover images from EPUB files and saves them to ./public/covers/
 * Generates placeholder covers if no cover image is found
 * 
 * Usage:
 *   node scripts/extract-covers.js
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import JSZip from 'jszip';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '../src/assets');
const COVERS_DIR = path.join(__dirname, '../public/covers');

/**
 * Ensure the covers directory exists
 */
async function ensureCoversDir() {
  try {
    await fs.access(COVERS_DIR);
  } catch {
    await fs.mkdir(COVERS_DIR, { recursive: true });
    console.log(`✅ Created directory: ${COVERS_DIR}`);
  }
}

/**
 * Find cover image path from EPUB content
 */
function findCoverPath(files, contentOpf) {
  // Method 1: Look for <meta name="cover" content="cover-id"/>
  const coverMetaMatch = contentOpf.match(/<meta\s+name=["']cover["']\s+content=["']([^"']+)["']/i);
  if (coverMetaMatch) {
    const coverId = coverMetaMatch[1];
    // Find the item with this id
    const itemMatch = contentOpf.match(new RegExp(`<item[^>]+id=["']${coverId}["'][^>]+href=["']([^"']+)["']`, 'i'));
    if (itemMatch) {
      return itemMatch[1];
    }
  }

  // Method 2: Look for common cover image patterns in manifest
  const commonCoverPatterns = [
    /href=["']([^"']*cover[^"']*\.(?:jpg|jpeg|png|gif))["']/i,
    /href=["']([^"']*images\/cover[^"']*\.(?:jpg|jpeg|png|gif))["']/i,
    /href=["']([^"']*OEBPS\/images\/cover[^"']*\.(?:jpg|jpeg|png|gif))["']/i,
  ];

  for (const pattern of commonCoverPatterns) {
    const match = contentOpf.match(pattern);
    if (match) {
      return match[1];
    }
  }

  // Method 3: Search through all image files for "cover" in name
  const imageFiles = Object.keys(files).filter(name => 
    /\.(jpg|jpeg|png|gif)$/i.test(name) && /cover/i.test(name)
  );
  
  if (imageFiles.length > 0) {
    return imageFiles[0];
  }

  // Method 4: Get first image file as fallback
  const firstImage = Object.keys(files).find(name => 
    /\.(jpg|jpeg|png|gif)$/i.test(name)
  );
  
  return firstImage || null;
}

/**
 * Extract cover from EPUB file
 */
async function extractCoverFromEpub(epubPath, outputName) {
  try {
    const data = await fs.readFile(epubPath);
    const zip = await JSZip.loadAsync(data);
    const files = zip.files;

    // Find content.opf file
    let contentOpfPath = null;
    let contentOpf = null;

    for (const [fileName, file] of Object.entries(files)) {
      if (fileName.endsWith('content.opf') || fileName.endsWith('.opf')) {
        contentOpfPath = fileName;
        contentOpf = await file.async('string');
        break;
      }
    }

    if (!contentOpf) {
      console.warn(`⚠️  No content.opf found in ${path.basename(epubPath)}`);
      return null;
    }

    // Find cover image
    let coverPath = findCoverPath(files, contentOpf);
    
    if (!coverPath) {
      console.warn(`⚠️  No cover image found in ${path.basename(epubPath)}`);
      return null;
    }

    // Handle relative paths (resolve relative to content.opf location)
    const opfDir = path.dirname(contentOpfPath);
    if (opfDir !== '.') {
      coverPath = path.join(opfDir, coverPath).replace(/\\/g, '/');
    }

    // Get the cover image file
    const coverFile = files[coverPath];
    if (!coverFile) {
      // Try without the directory prefix
      const alternativePath = coverPath.split('/').pop();
      const foundFile = Object.keys(files).find(name => name.endsWith(alternativePath));
      if (foundFile) {
        const imageData = await files[foundFile].async('nodebuffer');
        return imageData;
      }
      console.warn(`⚠️  Cover file not found: ${coverPath}`);
      return null;
    }

    const imageData = await coverFile.async('nodebuffer');
    return imageData;

  } catch (error) {
    console.error(`❌ Error extracting cover from ${path.basename(epubPath)}: ${error.message}`);
    return null;
  }
}

/**
 * Generate a placeholder cover image (SVG)
 */
function generatePlaceholder(bookName, color) {
  const title = bookName
    .replace(/[-_]/g, ' ')
    .replace(/\.(epub|pdf)$/i, '')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${adjustColor(color, -30)};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="400" height="600" fill="url(#grad)"/>
  <text x="200" y="280" font-family="Arial, sans-serif" font-size="32" font-weight="bold" 
        fill="white" text-anchor="middle" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
    ${wrapText(title, 20).map((line, i) => 
      `<tspan x="200" dy="${i === 0 ? 0 : 40}">${line}</tspan>`
    ).join('')}
  </text>
  <text x="200" y="520" font-family="Arial, sans-serif" font-size="18" 
        fill="rgba(255,255,255,0.8)" text-anchor="middle">
    EPUB
  </text>
</svg>`;

  return Buffer.from(svg);
}

/**
 * Wrap text to fit within width
 */
function wrapText(text, maxChars) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + word).length <= maxChars) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);

  return lines.slice(0, 4); // Max 4 lines
}

/**
 * Adjust color brightness
 */
function adjustColor(color, amount) {
  const num = parseInt(color.replace('#', ''), 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
  const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

/**
 * Generate color based on book name
 */
function getColorForBook(bookName) {
  const colors = [
    '#B86A3A', '#2E3A57', '#32A8A1', '#D0D7DD', 
    '#506171', '#4EC7B8', '#8B6F47', '#5A7D8C',
    '#A67C52', '#6B8E9D', '#9B7653', '#7A9CAE', '#C8956D'
  ];
  
  let hash = 0;
  for (let i = 0; i < bookName.length; i++) {
    hash = bookName.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
}

/**
 * Process all EPUB files
 */
async function processEpubFiles() {
  await ensureCoversDir();

  const files = await fs.readdir(ASSETS_DIR);
  const epubFiles = files.filter(file => file.endsWith('.epub'));

  if (epubFiles.length === 0) {
    console.log('⚠️  No EPUB files found in', ASSETS_DIR);
    return;
  }

  console.log(`\n📚 Found ${epubFiles.length} EPUB files\n`);
  console.log('=' .repeat(80));

  let extractedCount = 0;
  let placeholderCount = 0;

  for (const epubFile of epubFiles) {
    const epubPath = path.join(ASSETS_DIR, epubFile);
    const baseName = path.basename(epubFile, '.epub');
    const outputPath = path.join(COVERS_DIR, `${baseName}.jpg`);

    console.log(`\n📖 Processing: ${epubFile}`);

    // Extract cover
    const coverData = await extractCoverFromEpub(epubPath, baseName);

    if (coverData) {
      // Save extracted cover
      await fs.writeFile(outputPath, coverData);
      console.log(`   ✅ Extracted cover → ${path.basename(outputPath)}`);
      extractedCount++;
    } else {
      // Generate placeholder
      const color = getColorForBook(baseName);
      const placeholder = generatePlaceholder(baseName, color);
      const svgPath = path.join(COVERS_DIR, `${baseName}.svg`);
      await fs.writeFile(svgPath, placeholder);
      console.log(`   ⚠️  Generated placeholder → ${path.basename(svgPath)}`);
      placeholderCount++;
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log(`\n✨ Complete!`);
  console.log(`   📸 Extracted covers: ${extractedCount}`);
  console.log(`   🎨 Generated placeholders: ${placeholderCount}`);
  console.log(`   📁 Covers saved to: ${COVERS_DIR}\n`);
}

// Run the script
processEpubFiles().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

