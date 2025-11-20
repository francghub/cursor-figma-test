#!/usr/bin/env node

/**
 * Generate All Covers
 * 
 * Runs both EPUB and PDF cover extraction, then generates index
 * 
 * Usage:
 *   node scripts/generate-all-covers.js
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runScript(scriptName) {
  const scriptPath = path.join(__dirname, scriptName);
  console.log(`\n🚀 Running ${scriptName}...\n`);
  
  try {
    const { stdout, stderr } = await execAsync(`node ${scriptPath}`);
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  } catch (error) {
    console.error(`❌ Error running ${scriptName}:`, error.message);
    throw error;
  }
}

async function main() {
  console.log('═'.repeat(80));
  console.log('📚 GENERATING ALL BOOK COVERS');
  console.log('═'.repeat(80));

  try {
    // Extract EPUB covers
    await runScript('extract-covers.js');
    
    // Extract PDF covers
    await runScript('extract-pdf-covers.js');
    
    // Generate index (this will be done by rename-files.js, but we can call it separately if needed)
    console.log('\n✨ All covers generated successfully!\n');
    console.log('💡 To generate the cover index, run:');
    console.log('   node scripts/rename-files.js\n');
    
  } catch (error) {
    console.error('\n❌ Cover generation failed\n');
    process.exit(1);
  }
}

main();

