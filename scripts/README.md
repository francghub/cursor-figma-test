# Book Renaming Script

This script renames EPUB and PDF files in the `/src/assets` folder to follow a consistent naming pattern.

## Naming Format

```
author-title-year.ext
```

## Features

- ✅ Extracts metadata from PDF and EPUB files (title, author, year)
- ✅ Normalizes filenames (lowercase, hyphens instead of spaces)
- ✅ Removes special characters, brackets, and unnecessary words
- ✅ Dry run mode (preview before applying)
- ✅ Interactive confirmation before renaming
- ✅ Safe error handling

## Usage

### 1. Preview Changes (Dry Run)

```bash
node scripts/rename-books.js
```

This will show you what changes would be made **without** actually renaming files.

### 2. Apply Changes

```bash
node scripts/rename-books.js --apply
```

This will:
1. Show you the proposed changes
2. Ask for confirmation
3. Rename the files if you confirm

## Examples

### Before
```
The True Story of Fake News_ How Mainstrea - Mark Dice.epub
Off the Network_ Disrupting the Digital Wo - Ulises Ali Mejias.pdf
Hacker, Hoaxer, Whistleblower, - Gabriella Coleman.epub
```

### After
```
mark-dice-the-true-story-of-fake-news.epub
ulises-ali-mejias-off-the-network.pdf
gabriella-coleman-hacker-hoaxer-whistleblower-spy.epub
```

## What It Does

1. **Scans** `/src/assets` for `.pdf` and `.epub` files
2. **Extracts** metadata from each file:
   - PDF: Reads `/Title`, `/Author`, `/CreationDate` from PDF metadata
   - EPUB: Reads `<dc:title>`, `<dc:creator>`, `<dc:date>` from EPUB XML
3. **Normalizes** filenames:
   - Converts to lowercase
   - Replaces spaces with hyphens
   - Removes parentheses, brackets, and special characters
   - Removes words like "copy", "final", "draft"
4. **Displays** proposed changes in a formatted table
5. **Renames** files only after confirmation (with `--apply` flag)

## Safety Features

- 🔒 Dry run by default (must use `--apply` to make changes)
- 🔒 Interactive confirmation required
- 🔒 Skips files already following the convention
- 🔒 Error handling for each file operation
- 🔒 Shows success/failure count after operation

## Notes

- If metadata extraction fails, the script attempts to parse the filename
- Only files with `.pdf` or `.epub` extensions are processed
- Original files are preserved if an error occurs
- The script will not overwrite existing files with the same name

## Troubleshooting

**Q: No files are being renamed**
- Check that files are actually in `/src/assets` folder
- Make sure files have `.pdf` or `.epub` extensions

**Q: Metadata not being detected**
- Some files may have limited or no embedded metadata
- The script will fallback to parsing the filename

**Q: Want to test without risking changes?**
- Always run without `--apply` first to preview changes
- You can cancel the operation when prompted for confirmation

