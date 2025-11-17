# Research & Media Archive Portfolio

A modern portfolio website for experimental publishing research and media archives, converted from Figma design to code.

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Sticky Navigation** - Fixed header with smooth scroll to sections
- **Parallax Scrolling** - Beautiful depth effect on hero sections
- **Section Anchors** - Direct navigation to each section via URL hash
- **Modern Tech Stack** - Built with React 19, TypeScript, and Vite
- **Modular Components** - Easy to maintain and extend
- **Content Management** - Text stored separately in `/content` folder (JSON)
- **Placeholder Images** - SVG placeholders with correct aspect ratios (800x500)
- **Smooth Animations** - Loading screen, hover effects, and transitions
- **Back to Top Button** - Smooth scroll back to top
- **SEO Optimized** - Meta tags, semantic HTML, and accessibility features
- **Fast Performance** - Optimized with Vite for lightning-fast builds

## 📦 Tech Stack

- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool and dev server
- CSS3 - Styling

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cursor-figma-test
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌐 Deployment

This project is ready to be deployed to:

- **GitHub Pages** - Free hosting for static sites
- **Vercel** - Optimal for React/Vite projects
- **Netlify** - Simple drag-and-drop deployment

### Deploy to GitHub Pages

1. Update `vite.config.ts` with your repository name:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

2. Build and deploy:
```bash
npm run build
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Then drag the 'dist' folder to netlify.com
```

## 📁 Project Structure

```
cursor-figma-test/
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.tsx   # Sticky navigation bar
│   │   ├── Header.tsx       # Hero section
│   │   ├── *Section.tsx     # Page sections
│   │   ├── Footer.tsx       # Footer
│   │   ├── BackToTop.tsx    # Scroll to top button
│   │   └── LoadingScreen.tsx # Initial loading animation
│   ├── App.tsx              # Main app component
│   ├── App.css              # App & parallax styles
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── content/                 # Content management
│   ├── sections.json        # All text content
│   └── README.md            # Content guide
├── public/                  # Static assets
│   ├── placeholder-*.svg    # Placeholder images (800x500)
│   └── vite.svg             # Favicon
├── .github/workflows/       # CI/CD
│   └── deploy.yml           # Auto-deploy to GitHub Pages
├── index.html               # HTML template with SEO meta tags
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
├── vercel.json              # Vercel deployment config
├── netlify.toml             # Netlify deployment config
├── README.md                # This file
└── DEPLOYMENT.md            # Deployment guide
```

## 🎨 Design

Original design created in Figma and converted to code using the Figma API.

## 📄 License

ISC License

## 👤 Author

Experimental Publishing - Piet Zwart Institute

---

Built with ❤️ using React and TypeScript

