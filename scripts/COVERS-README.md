# EPUB Cover Extraction

Automatically extracts cover images from EPUB files and generates placeholders for missing covers.

## Features

✅ **Smart Cover Detection**
- Reads EPUB metadata (`<meta name="cover">`)
- Searches common paths (`images/cover.jpg`, `OEBPS/images/cover.jpg`)
- Finds files with "cover" in the name
- Falls back to first image file

✅ **Multiple Format Support**
- Extracts JPG, JPEG, PNG, GIF covers
- Generates SVG placeholders for missing covers
- Maintains original image quality

✅ **Auto-Generated Placeholders**
- Color-coded based on book name
- Gradient backgrounds
- Book title overlay
- Consistent sizing (400x600px)

## Usage

### Extract Covers from All EPUBs

```bash
node scripts/extract-covers.js
```

This will:
1. Scan `/src/assets` for `.epub` files
2. Extract cover images from each EPUB
3. Save covers to `/public/covers/`
4. Generate SVG placeholders for EPUBs without covers

### Output

Covers are saved as:
```
public/covers/
├── book-name-1.jpg
├── book-name-2.jpg
├── book-name-3.svg  (placeholder)
└── ...
```

## How It Works

### 1. EPUB Structure
EPUBs are ZIP files containing:
```
book.epub/
├── META-INF/
├── OEBPS/
│   ├── content.opf     # Metadata file
│   ├── images/
│   │   └── cover.jpg   # Cover image
│   └── ...
└── mimetype
```

### 2. Cover Detection Methods

The script tries multiple methods in order:

**Method 1: Metadata Tag**
```xml
<meta name="cover" content="cover-id"/>
<item id="cover-id" href="images/cover.jpg"/>
```

**Method 2: Common Patterns**
- `cover.jpg`, `cover.png`
- `images/cover.*`
- `OEBPS/images/cover.*`

**Method 3: Filename Search**
- Any image file with "cover" in name

**Method 4: Fallback**
- First image file in EPUB

### 3. Placeholder Generation

If no cover found:
```javascript
generatePlaceholder(bookName, color)
```

Creates an SVG with:
- Gradient background (book-specific color)
- Wrapped title text (max 4 lines)
- "EPUB" badge
- 400x600px dimensions

## React Integration

### Using in Components

```typescript
import { getBookCover, handleCoverError } from '@/utils/bookCovers';

// Get cover path
const coverPath = getBookCover(book);

// Handle errors
<img 
  src={coverPath} 
  onError={(e) => handleCoverError(e, book)}
  alt={book.title}
/>
```

### Available Utilities

**`getBookCover(book: Book): string`**
- Returns cover image path
- Falls back to placeholder if needed

**`getBookCoverData(book: Book)`**
- Returns object with image path, fallback color, and alt text
- Best for comprehensive cover handling

**`handleCoverError(event, book)`**
- Tries SVG placeholder on error
- Falls back to color background
- Attach to `<img onError={...}>`

**`preloadCovers(books: Book[])`**
- Preloads all cover images
- Call on component mount for better performance

**`checkCoverExists(path: string): Promise<boolean>`**
- Checks if cover file exists (client-side)
- Useful for conditional rendering

## Examples

### Basic Usage
```tsx
const coverData = getBookCoverData(book);

<div style={{ backgroundColor: coverData.fallbackColor }}>
  <img 
    src={coverData.imagePath}
    alt={coverData.altText}
    onError={(e) => handleCoverError(e, book)}
  />
</div>
```

### With Loading States
```tsx
const [imageLoaded, setImageLoaded] = useState(false);

<img
  src={getBookCover(book)}
  onLoad={() => setImageLoaded(true)}
  onError={(e) => handleCoverError(e, book)}
  className={imageLoaded ? 'loaded' : 'loading'}
/>
```

### Preloading
```tsx
useEffect(() => {
  preloadCovers(books);
}, [books]);
```

## Output Summary

After running the script, you'll see:

```
✨ Complete!
   📸 Extracted covers: 9
   🎨 Generated placeholders: 0
   📁 Covers saved to: /public/covers/
```

## Troubleshooting

**Q: No covers extracted**
- Check that `.epub` files exist in `/src/assets`
- Verify EPUBs aren't corrupted
- Check console for error messages

**Q: Covers look wrong**
- EPUB may have low-quality embedded cover
- Consider manually replacing with higher quality image

**Q: Placeholder generated instead of real cover**
- EPUB may not have cover metadata
- Check if EPUB has images using ZIP tool
- Manually extract and place in `/public/covers/`

## Manual Cover Addition

To manually add/replace a cover:

1. Name your image to match the book file:
   ```
   book-title.epub → book-title.jpg
   ```

2. Place in `/public/covers/`:
   ```bash
   cp my-custom-cover.jpg public/covers/book-title.jpg
   ```

3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.svg`

## Dependencies

- **jszip**: Unzip and read EPUB files
- Built-in Node.js `fs` and `path` modules

