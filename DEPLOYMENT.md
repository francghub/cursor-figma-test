# 🚀 Deployment Guide

Your website is ready to deploy! Follow these steps to get it online.

## ✅ Pre-Deployment Checklist

- [x] Project built successfully
- [x] No linter errors
- [x] All components working
- [x] Responsive design implemented
- [x] Deployment configs created

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)

**Step 1: Create GitHub Repository**
1. Go to https://github.com/new
2. Repository name: `cursor-figma-test` (or any name you prefer)
3. Make it **Public** (required for free GitHub Pages)
4. Don't initialize with README
5. Click "Create repository"

**Step 2: Push Your Code**
```bash
cd /Users/franc/Desktop/cursor-figma-test
git add -A
git commit -m "Initial commit: Figma to code conversion"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

**Step 3: Enable GitHub Pages**
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. The site will automatically deploy! ⚡

Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

> **Note:** If deploying to a subdirectory (not root domain), update `vite.config.ts`:
> ```typescript
> export default defineConfig({
>   base: '/YOUR-REPO-NAME/',
>   plugins: [react()],
> })
> ```
> Then rebuild: `npm run build`

---

### Option 2: Vercel (Easiest & Fastest)

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Deploy**
```bash
cd /Users/franc/Desktop/cursor-figma-test
vercel
```

**Step 3: Follow Prompts**
- Setup and deploy? Yes
- Link to existing project? No
- Project name: (press Enter)
- In which directory is your code located? ./
- Want to override settings? No

Your site will be live instantly! 🎉

---

### Option 3: Netlify (Drag & Drop)

**Step 1: Build the Project**
```bash
npm run build
```

**Step 2: Deploy**
1. Go to https://app.netlify.com/drop
2. Drag the `dist` folder onto the page
3. Done! Your site is live! 🚀

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy
```

---

## 🔧 Environment Configuration

### Update Base URL (if needed)

For subdirectory deployments, update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-subdirectory/',
  plugins: [react()],
})
```

### Custom Domain

After deploying to any platform:
1. Add your custom domain in the platform settings
2. Update DNS records as instructed
3. Enable HTTPS (usually automatic)

---

## 📊 Performance Tips

- All assets are optimized
- Code splitting enabled
- Gzip compression active
- Lazy loading implemented

---

## 🐛 Troubleshooting

**Build fails?**
- Run `npm install` again
- Check Node version: `node --version` (should be 18+)

**404 errors on routes?**
- The app uses client-side routing
- All platforms (GitHub Pages, Vercel, Netlify) are configured for SPA routing

**Slow loading?**
- Images are optimized
- Consider adding a CDN if needed

---

## 📞 Need Help?

- Check the [Vite docs](https://vitejs.dev/)
- GitHub Pages [documentation](https://docs.github.com/en/pages)
- Vercel [documentation](https://vercel.com/docs)
- Netlify [documentation](https://docs.netlify.com/)

---

Good luck with your deployment! 🎉

