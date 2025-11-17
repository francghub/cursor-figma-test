# Images Directory

## ✅ Images are now being used from /src/assets/

### Current Image Mapping:

1. **asset01.jpg** → Research Section (Espresso Book Machine)
2. **asset02.png** → Show Section (XPUB Gradshow)  
3. **asset03.jpg** → Transcripts Section
4. **asset04.jpg** → AMRO Section (Arts Meet Radical Openness)

### Current File Sizes:

- asset01.jpg: **4.67 MB** ⚠️ (Very Large - Should be optimized!)
- asset02.png: **1.01 MB** ⚠️ (Should be optimized)
- asset03.jpg: **556 KB** (OK but could be smaller)
- asset04.jpg: **388 KB** ✅ (Good size)

### Optimization Recommendations:

**For Better Performance:**

1. **Compress Images:**
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Target: < 500KB per image
   - Quality: 75-85% is usually perfect for backgrounds

2. **Resize if needed:**
   - Max width: 1920px (for full-screen backgrounds)
   - Aspect ratio: 16:9 (landscape)

3. **Convert to WebP (optional):**
   - Better compression than JPG/PNG
   - Supported by all modern browsers

### How to Replace Images:

1. Replace the files in `/src/assets/` folder
2. Keep the same filenames or update the imports in component files
3. Run `npm run build` to see changes

---

**Current Status:** ✅ Images are live and working!  
**Performance:** ⚠️ Consider optimizing asset01.jpg and asset02.png

