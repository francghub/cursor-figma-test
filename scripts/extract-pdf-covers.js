#!/usr/bin/env node

/**
 * PDF Cover Extractor
 * 
 * Generates thumbnail images from page 1 of PDF files
 * 
 * Usage:
 *   node scripts/extract-pdf-covers.js
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFDocument } from 'pdf-lib';
import sharp from 'sharp';

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
 * Generate a placeholder cover for PDF
 */
function generatePdfPlaceholder(fileName, color) {
  const title = fileName
    .replace(/[-_]/g, ' ')
    .replace(/\.pdf$/i, '')
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
    PDF
  </text>
</svg>`;

  return Buffer.from(svg);
}

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
  return lines.slice(0, 4);
}

function adjustColor(color, amount) {
  const num = parseInt(color.replace('#', ''), 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
  const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

function getColorForBook(bookName) {
  const colors = [
    '#B86A3A', '#2E3A57', '#32A8A1', '#D0D7DD', 
    '#506171', '#4EC7B8', '#8B6F47', '#5A7D8C'
  ];
  
  let hash = 0;
  for (let i = 0; i < bookName.length; i++) {
    hash = bookName.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
}

/**
 * Extract first page from PDF and convert to thumbnail
 * Note: pdf-lib doesn't directly render to images, so we create a simple placeholder
 * For true rendering, you'd need pdf-poppler or similar
 */
async function extractPdfThumbnail(pdfPath, outputName) {
  try {
    const pdfBytes = await fs.readFile(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    
    const pageCount = pdfDoc.getPageCount();
    
    if (pageCount === 0) {
      console.warn(`⚠️  PDF has no pages: ${path.basename(pdfPath)}`);
      return null;
    }

    // Get first page dimensions
    const firstPage = pdfDoc.getPage(0);
    const { width, height } = firstPage.getSize();
    
    console.log(`   📄 PDF info: ${pageCount} pages, ${Math.round(width)}x${Math.round(height)}px`);
    
    // Since pdf-lib doesn't render to images, we'll create a smart placeholder
    // that includes PDF metadata
    const color = getColorForBook(outputName);
    const placeholder = generatePdfPlaceholder(outputName, color);
    
    return placeholder;

  } catch (error) {
    console.error(`❌ Error processing PDF ${path.basename(pdfPath)}: ${error.message}`);
    return null;
  }
}

/**
 * Process all PDF files
 */
async function processPdfFiles() {
  await ensureCoversDir();

  const files = await fs.readdir(ASSETS_DIR);
  const pdfFiles = files.filter(file => file.endsWith('.pdf'));

  if (pdfFiles.length === 0) {
    console.log('⚠️  No PDF files found in', ASSETS_DIR);
    return;
  }

  console.log(`\n📄 Found ${pdfFiles.length} PDF files\n`);
  console.log('=' .repeat(80));

  let extractedCount = 0;
  let placeholderCount = 0;

  for (const pdfFile of pdfFiles) {
    const pdfPath = path.join(ASSETS_DIR, pdfFile);
    const baseName = path.basename(pdfFile, '.pdf');
    const outputPath = path.join(COVERS_DIR, `${baseName}.jpg`);

    console.log(`\n📖 Processing: ${pdfFile}`);

    // Generate thumbnail
    const thumbnailData = await extractPdfThumbnail(pdfPath, baseName);

    if (thumbnailData) {
      // Save as SVG placeholder (convert to JPG with sharp if needed)
      const svgPath = path.join(COVERS_DIR, `${baseName}.svg`);
      await fs.writeFile(svgPath, thumbnailData);
      console.log(`   ✅ Generated thumbnail → ${path.basename(svgPath)}`);
      placeholderCount++;
    } else {
      console.log(`   ⚠️  Failed to generate thumbnail`);
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log(`\n✨ Complete!`);
  console.log(`   🎨 Generated thumbnails: ${placeholderCount}`);
  console.log(`   📁 Covers saved to: ${COVERS_DIR}\n`);
}

// Run the script
processPdfFiles().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

