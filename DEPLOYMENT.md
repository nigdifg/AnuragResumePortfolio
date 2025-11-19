# Deployment Guide - Anurag Portfolio

This guide provides step-by-step instructions for deploying your Anurag Portfolio website to various hosting platforms.

## Prerequisites

Before deploying, ensure you have:
- Node.js (v18 or higher)
- npm or yarn
- Git installed
- A GitHub account (for most deployment options)

## Building the Project Locally

First, navigate to the project directory and install dependencies:

```bash
cd anurag-portfolio
npm install
```

Build the project:

```bash
npm run build
```

This creates a `dist` folder containing your production-ready static files.

## Deployment Options

### Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel offers the fastest and easiest deployment with automatic builds and previews.

#### Steps:

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up using your GitHub account

2. **Import Your Repository**
   - Click "Add New Project"
   - Import your GitHub repository
   - Select the `AnuragResumePortfolio` repository

3. **Configure Build Settings**
   - Framework Preset: `Vite`
   - Root Directory: `anurag-portfolio`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes at `https://your-project.vercel.app`

#### Using Vercel CLI (Alternative)

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to your project
cd anurag-portfolio

# Deploy
vercel
```

Follow the prompts to complete deployment.

---

### Option 2: Deploy to Netlify

Netlify is another excellent option with great developer experience.

#### Steps:

1. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up using your GitHub account

2. **Deploy from Git**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your repository

3. **Configure Build Settings**
   - Base directory: `anurag-portfolio`
   - Build command: `npm run build`
   - Publish directory: `anurag-portfolio/dist`

4. **Deploy**
   - Click "Deploy site"
   - Your site will be live at `https://your-site-name.netlify.app`

#### Using Netlify CLI (Alternative)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to your project and build
cd anurag-portfolio
npm run build

# Deploy
netlify deploy --prod
```

---

### Option 3: Deploy to GitHub Pages

GitHub Pages is free and integrates directly with your repository.

#### Steps:

1. **Install gh-pages package**
   ```bash
   cd anurag-portfolio
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   
   Add the following to your `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/AnuragResumePortfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Configure Vite for GitHub Pages**
   
   Update `vite.config.js`:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/AnuragResumePortfolio/'
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/ (root)`
   - Save

Your site will be live at `https://yourusername.github.io/AnuragResumePortfolio/`

---

### Option 4: Deploy to Cloudflare Pages

Cloudflare Pages offers excellent performance and CDN integration.

#### Steps:

1. **Sign up for Cloudflare Pages**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Sign up and connect your GitHub account

2. **Create a New Project**
   - Click "Create a project"
   - Select your repository
   - Choose the `main` or `master` branch

3. **Configure Build Settings**
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `anurag-portfolio`

4. **Deploy**
   - Click "Save and Deploy"
   - Your site will be live at `https://your-project.pages.dev`

---

### Option 5: Deploy to Firebase Hosting

Firebase provides reliable hosting with great performance.

#### Steps:

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase in your project**
   ```bash
   cd anurag-portfolio
   firebase init hosting
   ```

4. **Configure Firebase**
   - Select or create a Firebase project
   - Public directory: `dist`
   - Single-page app: `Yes`
   - Set up automatic builds with GitHub: `No` (or Yes if preferred)

5. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

Your site will be live at `https://your-project.web.app`

---

### Option 6: Deploy to AWS S3 + CloudFront

For enterprise-level deployment with AWS.

#### Steps:

1. **Build your project**
   ```bash
   cd anurag-portfolio
   npm run build
   ```

2. **Create an S3 Bucket**
   - Go to AWS S3 Console
   - Create a new bucket (e.g., `anurag-portfolio`)
   - Enable static website hosting
   - Set index document: `index.html`
   - Set error document: `index.html`

3. **Upload dist folder**
   - Upload all files from the `dist` folder to your S3 bucket
   - Make files publicly accessible

4. **Configure CloudFront (Optional but Recommended)**
   - Create a CloudFront distribution
   - Point it to your S3 bucket
   - This provides HTTPS and global CDN

5. **Update DNS**
   - Point your domain to CloudFront or S3 bucket URL

---

## Custom Domain Setup

### For Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### For Netlify:
1. Go to "Domain settings"
2. Add custom domain
3. Update DNS records as instructed

### For GitHub Pages:
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS with your domain provider:
   - Add A records pointing to GitHub IPs
   - Or add CNAME record pointing to `yourusername.github.io`

---

## Environment Variables

If you need to use environment variables (API keys, etc.):

1. **Create `.env` file** (never commit this):
   ```
   VITE_API_KEY=your_api_key
   VITE_API_URL=your_api_url
   ```

2. **Access in code**:
   ```javascript
   const apiKey = import.meta.env.VITE_API_KEY;
   ```

3. **Configure in hosting platform**:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Environment Variables
   - **Cloudflare**: Settings → Environment Variables

---

## Continuous Deployment (CI/CD)

Most platforms support automatic deployments:

- **Vercel/Netlify/Cloudflare**: Automatically deploy on git push to main branch
- **GitHub Pages**: Set up GitHub Actions workflow
- **Firebase**: Use GitHub Actions or Firebase CLI

### Example GitHub Actions for GitHub Pages:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      working-directory: ./anurag-portfolio
      run: npm install
    
    - name: Build
      working-directory: ./anurag-portfolio
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./anurag-portfolio/dist
```

---

## Troubleshooting

### Build fails with "Cannot find module 'tailwindcss'"
```bash
npm install -D tailwindcss @tailwindcss/postcss autoprefixer postcss
```

### Routes not working after deployment
- Ensure your hosting platform is configured for single-page apps
- Set error page to `index.html`

### Assets not loading
- Check `base` in `vite.config.js` matches your deployment path
- For subdirectory deployments, set `base: '/subdirectory/'`

### Large bundle size
```bash
npm run build -- --mode production
# Check bundle size analysis
npx vite-bundle-visualizer
```

---

## Performance Optimization

Before deploying to production:

1. **Optimize images**: Use WebP format and appropriate sizes
2. **Enable compression**: Most hosting platforms do this automatically
3. **Use CDN**: Vercel, Netlify, and Cloudflare provide this by default
4. **Cache static assets**: Configure proper cache headers

---

## Recommended: Vercel or Netlify

For the best experience with minimal configuration, I recommend:
1. **Vercel** - Fastest deployment, excellent DX
2. **Netlify** - Great features, easy to use
3. **GitHub Pages** - Free and simple for personal projects

Choose based on your needs:
- **Free hosting**: GitHub Pages, Netlify, Vercel (all offer free tiers)
- **Custom domain**: All options support this
- **Automatic deployments**: Vercel, Netlify, Cloudflare
- **Enterprise**: AWS, Cloudflare

---

## Quick Start (Fastest Deployment)

The absolute fastest way to deploy:

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd anurag-portfolio

# Deploy (follow prompts)
vercel
```

That's it! Your site will be live in under 2 minutes.

---

## Support

If you encounter issues:
1. Check the [Vite documentation](https://vitejs.dev/)
2. Review platform-specific docs (Vercel, Netlify, etc.)
3. Check the GitHub Issues for this project

---

## Next Steps

After deployment:
1. ✅ Set up a custom domain
2. ✅ Configure analytics (Google Analytics, Plausible, etc.)
3. ✅ Set up monitoring (Sentry for error tracking)
4. ✅ Enable automatic deployments on git push
5. ✅ Add SEO meta tags and Open Graph images

Happy deploying! 🚀
