# Prithweeraj Acharjee - Museum-Grade Portfolio

A world-class portfolio merging computational art, GPU graphics, ML research, and systems architecture. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm / yarn / pnpm

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## 🎨 Asset Intake Checklist (Action Required)

To replace placeholders with your actual work, follow this checklist. Please upload the following assets to the specified paths:

### 1. Gallery Artworks (`/public/artworks/`)
For each artwork, upload a high-quality JPEG or WebP. 
*Recommended: 2000px on the longest side, ~1-2MB.*

- [ ] `/public/artworks/gallery-a/echoes-01.jpg`
- [ ] `/public/artworks/mixed-media/kinetic-memory.jpg`
- [ ] *Add more following the folder structure.*

### 2. Project Hero Images (`/public/projects/`)
High-impact visuals for the Systems page.
*Recommended: 16:10 Aspect Ratio, 2560x1600px.*

- [ ] `/public/projects/aesthetic-resistance-hero.jpg`
- [ ] `/public/projects/conservatwin-hero.jpg`
- [ ] `/public/projects/arabic-mt-hero.jpg`
- [ ] `/public/projects/bengali-fn-hero.jpg`
- [ ] `/public/projects/handshake-ai-hero.jpg`

### 3. About & Branding
- [ ] `/public/about/portrait.jpg` (Editorial style portrait, B&W recommended)
- [ ] Favicon (Standard 32x32px)

---

## 📝 Content Management (How to Edit)

All site data is centralized in `lib/content/index.ts`. No code rewrites are required for content updates.

### Adding a New Project
1. Open [lib/content/index.ts](file:///d:/New%20folder%20(3)/lib/content/index.ts).
2. Add a new object to the `projects` array.
3. Ensure the `id` matches the filename of your hero image in `/public/projects/`.

### Adding a New Series & Artwork
1. Open [lib/content/index.ts](file:///d:/New%20folder%20(3)/lib/content/index.ts).
2. Add a new object to the `series` array.
3. Each series contains an `artworks` array.
4. Ensure you include `dimensions` and `medium` for each artwork to maintain the museum aesthetic.
5. Set the `id` for each series/artwork to match your folder/filenames in `/public/artworks/`.

---

## 🏛️ Design System Notes
- **Aesthetic Mode**: Maximizes negative space and typography. Use this for gallery visitors.
- **Technical Mode**: Reveals `TechnicalBlock` components, architecture diagrams, and stack tags. Use this for engineering peers and recruiters.
- **Fonts**: Uses *Playfair Display* (Serif) for headings and *Inter* (Sans) for body text to maintain a museum-grade editorial feel.

---

## 📦 Deployment on Vercel
1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. Vercel will automatically detect Next.js and deploy.
