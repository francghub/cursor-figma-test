# Complete Scripts Guide

Comprehensive guide for all book management scripts.

---

## 📚 Table of Contents

1. [Extract EPUB Covers](#extract-epub-covers)
2. [Extract PDF Thumbnails](#extract-pdf-thumbnails)
3. [Rename Files (Kebab-Case)](#rename-files)
4. [Generate All Covers](#generate-all-covers)
5. [Workflow Examples](#workflow-examples)
6. [React Integration](#react-integration)

---

## 1. Extract EPUB Covers

**Script:** `extract-covers.js`

Extracts cover images from EPUB files using JSZip.

### Usage

```bash
node scripts/extract-covers.js
```

### What It Does

1. Scans `/src/assets` for `.epub` files
2. Unzips each EPUB and reads metadata
3. Finds cover image using multiple detection methods:
   - `<meta name="cover">` tag
   - Common paths (`images/cover.jpg`, `OEBPS/images/cover.*`)
   - Files with "cover" in name
   - First image file as fallback
4. Extracts and saves to `/public/covers/`
5. Generates SVG placeholder if no cover found

### Output

```
public/covers/
├── book-name-1.jpg  (extracted)
├── book-name-2.jpg  (extracted)
├── book-name-3.svg  (placeholder)
```

### Results

- ✅ **9 EPUB covers extracted** successfully
- 🎨 **0 placeholders** generated (all EPUBs had covers!)

---

## 2. Extract PDF Thumbnails

**Script:** `extract-pdf-covers.js`

Generates cover thumbnails from PDF files using pdf-lib.

### Usage

```bash
node scripts/extract-pdf-covers.js
```

### What It Does

1. Scans `/src/assets` for `.pdf` files
2. Reads PDF metadata (page count, dimensions)
3. Generates color-coded SVG placeholder representing first page
4. Saves to `/public/covers/`

### Output

```
public/covers/
├── pdf-book-1.svg  (thumbnail)
├── pdf-book-2.svg  (thumbnail)
```

### Results

- ✅ **4 PDF thumbnails** generated
- 📄 Includes page count and dimensions info

### Note

pdf-lib doesn't render PDFs to images. For true rendering, you'd need:
- **pdf-poppler** (requires system dependencies)
- **pdf2pic** (requires ImageMagick)
- **puppeteer** (headless Chrome)

Current implementation uses smart placeholders with:
- Book title
- Color-coded gradient
- "PDF" badge
- Consistent 400x600px size

---

## 3. Rename Files (Kebab-Case)

**Script:** `rename-files.js`

Converts all EPUB and PDF filenames to clean kebab-case format.

### Usage

**Preview Changes (Dry Run):**
```bash
node scripts/rename-files.js
```

**Apply Changes:**
```bash
node scripts/rename-files.js --apply
```

### What It Does

1. Scans `/src/assets` for `.epub` and `.pdf` files
2. Converts filenames to kebab-case:
   - Lowercase
   - Spaces → hyphens
   - Removes accents (Gödel → godel)
   - Removes special characters
   - Removes brackets/parentheses
3. Shows preview of all changes
4. Asks for confirmation (when using `--apply`)
5. Renames book files
6. Updates corresponding cover files
7. Generates JSON index (`/public/covers/index.json`)

### Transformation Examples

```
Before                                           After
─────────────────────────────────────────────────────────────────────────
Consent of the Networked_ The Worldwide St.epub → consent-of-the-networked-the-worldwide-st.epub
El kit de la lucha en internet.pdf              → el-kit-de-la-lucha-en-internet.pdf
Hacker, Hoaxer, Whistleblower, Spy.epub         → hacker-hoaxer-whistleblower-spy.epub
MediaLandscape2011.pdf                           → medialandscape2011.pdf
```

### Generated Index

The script creates `/public/covers/index.json`:

```json
{
  "generated": "2024-11-20T10:30:00.000Z",
  "count": 13,
  "covers": {
    "consent-of-the-networked": {
      "filename": "consent-of-the-networked.jpg",
      "path": "/covers/consent-of-the-networked.jpg",
      "format": "jpg"
    },
    ...
  }
}
```

### Results

- 📝 **13 files** ready to rename
- 🖼️ **Auto-updates** corresponding covers
- 📋 **Generates** JSON index

---

## 4. Generate All Covers

**Script:** `generate-all-covers.js`

Master script that runs both EPUB and PDF extraction.

### Usage

```bash
node scripts/generate-all-covers.js
```

### What It Does

1. Runs `extract-covers.js` (EPUB extraction)
2. Runs `extract-pdf-covers.js` (PDF thumbnails)
3. Shows combined results

### When to Use

- After adding new books to `/src/assets`
- After updating book files
- To regenerate all covers at once

---

## 5. Workflow Examples

### Complete Setup (New Project)

```bash
# 1. Extract all covers
node scripts/generate-all-covers.js

# 2. Preview renaming
node scripts/rename-files.js

# 3. Apply renaming
node scripts/rename-files.js --apply

# 4. Build project
npm run build
```

### Adding New Books

```bash
# 1. Add .epub or .pdf files to /src/assets

# 2. Generate covers
node scripts/generate-all-covers.js

# 3. Update books data in src/data/books.ts

# 4. Build
npm run build
```

### Regenerating Covers Only

```bash
# EPUBs only
node scripts/extract-covers.js

# PDFs only
node scripts/extract-pdf-covers.js

# Both
node scripts/generate-all-covers.js
```

### Clean Filenames Workflow

```bash
# 1. Preview what will change
node scripts/rename-files.js

# 2. Apply if satisfied
node scripts/rename-files.js --apply

# 3. Update books data to match new names
# Edit: src/data/books.ts

# 4. Regenerate covers (if needed)
node scripts/generate-all-covers.js
```

---

## 6. React Integration

### Using Covers in Components

#### Basic Usage

```typescript
import { getBookCover } from '@/utils/bookCovers';

const coverPath = getBookCover(book);

<img src={coverPath} alt={book.title} />
```

#### With Error Handling

```typescript
import { getBookCoverData, handleCoverError } from '@/utils/bookCovers';

const coverData = getBookCoverData(book);

<div style={{ backgroundColor: coverData.fallbackColor }}>
  <img
    src={coverData.imagePath}
    alt={coverData.altText}
    onError={(e) => handleCoverError(e, book)}
  />
</div>
```

#### Preloading

```typescript
import { preloadCovers } from '@/utils/bookCovers';

useEffect(() => {
  preloadCovers(books);
}, [books]);
```

#### Using the JSON Index

```typescript
import coverIndex from '/public/covers/index.json';

const getCover = (bookBaseName: string) => {
  const cover = coverIndex.covers[bookBaseName];
  return cover ? cover.path : '/covers/placeholder.svg';
};
```

### Enhanced 3D Carousel

The carousel now features:

**Center Book:**
- ✅ 1.2x scale (20% larger)
- ✅ No rotation (faces forward)
- ✅ Enhanced shadows (30px+ elevation)
- ✅ Z-index priority

**Side Books:**
- ✅ 0.8x scale (20% smaller)
- ✅ 25° rotation (creates depth)
- ✅ -80px translateZ (pushed back)
- ✅ Reduced opacity (60%+)

**Transitions:**
- ✅ 0.6s cubic-bezier easing
- ✅ Smooth scale and rotation
- ✅ Enhanced hover effects
- ✅ Preserved 3D transforms

---

## 📋 Quick Reference

| Task | Command |
|------|---------|
| Extract EPUB covers | `node scripts/extract-covers.js` |
| Extract PDF covers | `node scripts/extract-pdf-covers.js` |
| Generate all covers | `node scripts/generate-all-covers.js` |
| Preview renaming | `node scripts/rename-files.js` |
| Apply renaming | `node scripts/rename-files.js --apply` |
| Build project | `npm run build` |

---

## 🔧 Dependencies

```json
{
  "jszip": "^3.10.1",      // EPUB extraction
  "pdf-lib": "^1.17.1",    // PDF processing
  "sharp": "^0.33.0"       // Image manipulation (optional)
}
```

Install with:
```bash
npm install jszip pdf-lib sharp
```

---

## 📁 File Structure

```
project/
├── scripts/
│   ├── extract-covers.js          # EPUB cover extraction
│   ├── extract-pdf-covers.js      # PDF thumbnail generation
│   ├── rename-files.js            # Kebab-case converter
│   ├── generate-all-covers.js     # Master script
│   ├── COMPLETE-GUIDE.md          # This file
│   └── COVERS-README.md           # Cover extraction details
├── src/
│   ├── assets/                    # Book files (.epub, .pdf)
│   ├── data/
│   │   └── books.ts               # Book metadata
│   └── utils/
│       └── bookCovers.ts          # Cover utilities
└── public/
    └── covers/                    # Generated covers
        ├── index.json             # Cover index
        ├── book-1.jpg             # EPUB covers
        ├── book-2.svg             # PDF placeholders
        └── ...
```

---

## 🚀 Next Steps

1. **Run the renaming script:**
   ```bash
   node scripts/rename-files.js --apply
   ```

2. **Update `src/data/books.ts`** with new filenames

3. **Regenerate covers** if needed:
   ```bash
   node scripts/generate-all-covers.js
   ```

4. **Build and deploy:**
   ```bash
   npm run build
   git add -A
   git commit -m "Update book filenames and covers"
   git push origin main
   ```

---

## 💡 Tips

- Always run scripts without `--apply` first to preview changes
- Keep backups of original files before renaming
- The JSON index is regenerated automatically
- Covers are matched by base filename (without extension)
- SVG placeholders work great for missing covers
- The carousel preloads all covers for smooth performance

---

## 🐛 Troubleshooting

**Q: Covers not showing in carousel**
- Check that filenames match between books and covers
- Verify covers exist in `/public/covers/`
- Check browser console for 404 errors
- Try regenerating the index: `node scripts/rename-files.js`

**Q: PDF thumbnails are placeholders**
- This is expected - pdf-lib doesn't render to images
- For true rendering, use pdf-poppler or puppeteer
- Current placeholders are color-coded and informative

**Q: Renaming didn't update covers**
- Covers are auto-updated by the script
- Manually check `/public/covers/` directory
- Re-run: `node scripts/generate-all-covers.js`

**Q: Build errors after renaming**
- Update `src/data/books.ts` with new filenames
- Check import paths in components
- Clear dist folder: `rm -rf dist && npm run build`

