# 🚀 Complete Deployment Guide

This guide covers deploying your website to **GitHub Pages**, **Netlify**, and **Vercel**.

---

## 📋 Table of Contents

1. [GitHub Pages Deployment](#github-pages-deployment) ⭐ Currently Active
2. [Netlify Deployment](#netlify-deployment)
3. [Vercel Deployment](#vercel-deployment)
4. [Environment Configuration](#environment-configuration)
5. [Troubleshooting](#troubleshooting)
6. [Testing Production Builds Locally](#testing-locally)

---

## 🟢 GitHub Pages Deployment

**✅ ALREADY DEPLOYED!**

Your site is live at: **https://francghub.github.io/cursor-figma-test/**

### How It Works

- **Automatic deployment** via GitHub Actions
- Triggers on every push to `main` branch
- Build time: ~1-2 minutes
- Configuration file: `.github/workflows/deploy.yml`

### Making Updates

```bash
# Make your changes
git add .
git commit -m "Your update message"
git push origin main

# GitHub Actions automatically:
# 1. Builds the site
# 2. Deploys to GitHub Pages
# 3. Site updates in 1-2 minutes
```

### View Deployment Status

Go to: https://github.com/francghub/cursor-figma-test/actions

### Manual Build for GitHub Pages

```bash
npm run build:github
# or
VITE_BASE_PATH=/cursor-figma-test/ npm run build
```

### GitHub Pages Settings

Already configured! But if you need to check:
1. Go to: https://github.com/francghub/cursor-figma-test/settings/pages
2. Source: **GitHub Actions**
3. Custom domain: (Optional)

---

## 🔵 Netlify Deployment

### Option 1: Drag & Drop (Easiest)

1. **Build locally:**
   ```bash
   npm run build:netlify
   ```

2. **Deploy:**
   - Go to: https://app.netlify.com/drop
   - Drag the `dist` folder
   - Done! 🎉

### Option 2: CLI Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
cd /Users/franc/Desktop/cursor-figma-test
netlify deploy --prod
```

### Option 3: Git Integration (Recommended)

1. Go to: https://app.netlify.com/
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect to GitHub
4. Select: `francghub/cursor-figma-test`
5. Settings (auto-detected from `netlify.toml`):
   - **Build command:** `VITE_BASE_PATH=/ npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 20
6. Click **"Deploy site"**

### Netlify Features

- ✅ Automatic HTTPS
- ✅ Custom domains
- ✅ Instant cache invalidation
- ✅ Deploy previews for PRs
- ✅ Form handling
- ✅ Serverless functions (if needed)

### Your Netlify URL

After deployment: `https://your-site-name.netlify.app`

You can customize: **Site settings** → **Change site name**

---

## 🟣 Vercel Deployment

### Option 1: CLI (Fastest)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd /Users/franc/Desktop/cursor-figma-test
vercel

# Follow the prompts:
# - Setup and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name: cursor-figma-test
# - In which directory? ./
# - Override settings? No
```

### Option 2: Git Integration (Recommended)

1. Go to: https://vercel.com/new
2. Click **"Import Git Repository"**
3. Connect GitHub (if not already)
4. Select: `francghub/cursor-figma-test`
5. Settings (auto-detected from `vercel.json`):
   - **Framework Preset:** Vite
   - **Build Command:** `VITE_BASE_PATH=/ npm run build`
   - **Output Directory:** `dist`
6. Click **"Deploy"**

### Vercel Features

- ✅ Automatic HTTPS
- ✅ Global CDN (edge network)
- ✅ Instant rollbacks
- ✅ Preview deployments
- ✅ Analytics
- ✅ Edge Functions (if needed)

### Your Vercel URL

After deployment: `https://cursor-figma-test.vercel.app`

Or custom domain: **Project Settings** → **Domains**

---

## ⚙️ Environment Configuration

### Understanding Base Paths

Different platforms need different base paths:

| Platform | Base Path | Build Command |
|----------|-----------|--------------|
| **GitHub Pages** | `/cursor-figma-test/` | `npm run build:github` |
| **Netlify** | `/` | `npm run build:netlify` |
| **Vercel** | `/` | `npm run build:vercel` |
| **Custom Domain** | `/` | `npm run build:netlify` |

### Vite Configuration

The `vite.config.ts` automatically handles base paths:

```typescript
base: process.env.VITE_BASE_PATH || '/cursor-figma-test/'
```

### Build Scripts

```json
{
  "scripts": {
    "dev": "vite",                              // Local development
    "build": "tsc && vite build",               // Default (GitHub Pages)
    "build:github": "VITE_BASE_PATH=/cursor-figma-test/ npm run build",
    "build:netlify": "VITE_BASE_PATH=/ npm run build",
    "build:vercel": "VITE_BASE_PATH=/ npm run build",
    "preview": "vite preview",                  // Preview production build
    "preview:github": "vite preview --base=/cursor-figma-test/"
  }
}
```

---

## 🧪 Testing Locally

### Test Production Build

```bash
# Build for production
npm run build

# Preview the build
npm run preview

# Opens at: http://localhost:4173
```

### Test GitHub Pages Build

```bash
# Build with GitHub Pages base path
npm run build:github

# Preview with correct base path
npm run preview:github

# Opens at: http://localhost:4173/cursor-figma-test/
```

### Verify Links

After building, check that:
- ✅ All navigation links work
- ✅ Images load correctly
- ✅ CSS styles are applied
- ✅ JavaScript bundles load
- ✅ No 404 errors in console

---

## 🐛 Troubleshooting

### Issue: 404 on GitHub Pages

**Problem:** Site shows 404 or blank page

**Solution:**
1. Check base path in `vite.config.ts` matches repo name:
   ```typescript
   base: '/cursor-figma-test/'  // Must match repo name!
   ```
2. Rebuild and push:
   ```bash
   npm run build:github
   git add dist
   git commit -m "Fix: Update build"
   git push
   ```

### Issue: Assets Not Loading

**Problem:** CSS/JS files return 404

**Solution:**
- Ensure base path is correct in `vite.config.ts`
- Check GitHub Actions workflow succeeded
- Clear browser cache: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Issue: Navigation Links Broken

**Problem:** Clicking navigation doesn't scroll to sections

**Solution:**
- Sections need IDs: `id="research"`, `id="library"`, etc.
- Already implemented! ✅

### Issue: Build Fails on Netlify/Vercel

**Problem:** Deployment fails during build

**Solution:**
1. Check Node version: Should be 20
2. Clear build cache in platform settings
3. Try rebuilding:
   ```bash
   npm install
   npm run build
   ```

### Issue: Images Not Showing

**Problem:** Placeholder images return 404

**Solution:**
- Images in `/public` folder are automatically copied to dist
- Use paths like: `/placeholder-research.svg` (no /public/)
- For GitHub Pages: `/cursor-figma-test/placeholder-research.svg`

---

## 📊 Build Performance

Current build stats:
```
✓ dist/index.html                   1.27 kB │ gzip:  0.55 kB
✓ dist/assets/index-*.css           9.29 kB │ gzip:  2.43 kB
✓ dist/assets/vendor-*.js          11.32 kB │ gzip:  4.07 kB  (React)
✓ dist/assets/index-*.js          196.11 kB │ gzip: 61.23 kB
```

**Total gzipped size: ~68 KB** - Excellent! ⚡

---

## 🔄 Deployment Comparison

| Feature | GitHub Pages | Netlify | Vercel |
|---------|-------------|---------|--------|
| **Cost** | Free | Free tier | Free tier |
| **Build Time** | 1-2 min | 30s-1min | 20s-40s |
| **Custom Domain** | ✅ | ✅ | ✅ |
| **HTTPS** | ✅ | ✅ | ✅ |
| **Auto Deploy** | ✅ | ✅ | ✅ |
| **Deploy Previews** | ❌ | ✅ | ✅ |
| **Analytics** | ❌ | ✅ (paid) | ✅ (paid) |
| **Edge Functions** | ❌ | ✅ | ✅ |
| **Forms** | ❌ | ✅ | ❌ |

### Recommendation

- **GitHub Pages**: ✅ Best for simple sites (current setup)
- **Netlify**: Best for forms, redirects, custom headers
- **Vercel**: Best for Next.js or edge functions
- **All three**: Great for static React sites! Choose based on preference

---

## 🎯 Quick Commands Reference

```bash
# Development
npm run dev                    # Start dev server (localhost:5173)

# Building
npm run build                  # Build for GitHub Pages
npm run build:github          # Build for GitHub Pages (explicit)
npm run build:netlify         # Build for Netlify
npm run build:vercel          # Build for Vercel

# Testing
npm run preview               # Preview production build
npm run preview:github        # Preview with GitHub Pages base path

# Deployment
git push origin main          # Auto-deploy to GitHub Pages
netlify deploy --prod         # Deploy to Netlify
vercel --prod                 # Deploy to Vercel
```

---

## 📝 Next Steps

1. ✅ Site is already deployed on GitHub Pages
2. 🔄 (Optional) Deploy to Netlify or Vercel for comparison
3. 🎨 Replace placeholder images with real content
4. 📝 Update text in `/content/sections.json`
5. 🌐 (Optional) Connect a custom domain

---

## 🆘 Need Help?

- **GitHub Pages Issues**: https://docs.github.com/pages
- **Netlify Docs**: https://docs.netlify.com/
- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev/guide/static-deploy.html

---

**✨ Your site is production-ready and deployed!** ✨

