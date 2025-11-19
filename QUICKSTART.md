# Quick Start Guide 🚀

Welcome! This guide will help you deploy your Anurag Portfolio in just a few minutes.

## Prerequisites

Before starting, make sure you have:
- ✅ Node.js 18 or higher installed ([Download here](https://nodejs.org/))
- ✅ Git installed ([Download here](https://git-scm.com/))
- ✅ A GitHub account ([Sign up here](https://github.com/))

## Step 1: Setup Your Project

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/nigdifg/AnuragResumePortfolio.git
   cd AnuragResumePortfolio/anurag-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Test locally**:
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 in your browser to see your portfolio.

## Step 2: Customize Your Portfolio

Before deploying, personalize your portfolio:

1. Open `src/App.jsx`
2. Find the `SYSTEM_DATA` object (around line 11)
3. Update with your information:
   - Name
   - Role
   - Email
   - Phone
   - Experience
   - Projects
   - Skills

## Step 3: Deploy (Choose ONE Option)

### Option A: Vercel (Recommended - Fastest & Easiest)

**Why Vercel?** 
- ✨ Free forever for personal projects
- 🚀 Deploys in under 2 minutes
- 🔄 Automatic deployments on git push
- 🌐 Free SSL certificate
- 📊 Built-in analytics

**Steps:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (follow the prompts)
vercel
```

That's it! Your site will be live at `https://your-project.vercel.app`

### Option B: Netlify (Also Great!)

**Why Netlify?**
- ✨ Free tier with generous limits
- 🎨 Great for static sites
- 🔧 Easy configuration
- 🔄 Automatic deployments

**Steps:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build your project
npm run build

# Deploy
netlify deploy --prod
```

### Option C: GitHub Pages (100% Free)

**Why GitHub Pages?**
- 💰 Completely free
- 🔗 Integrates with your repo
- 🌐 Custom domain support

**Steps:**

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json** (in the anurag-portfolio folder):
   ```json
   {
     "homepage": "https://yourusername.github.io/AnuragResumePortfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/AnuragResumePortfolio/'
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/ (root)`
   - Save

Your site will be live at `https://yourusername.github.io/AnuragResumePortfolio/`

## Step 4: Add a Custom Domain (Optional)

### For Vercel:
1. Go to your project dashboard
2. Settings → Domains
3. Add your domain (e.g., `anurag.dev`)
4. Follow the DNS instructions

### For Netlify:
1. Site Settings → Domain Management
2. Add custom domain
3. Update your DNS settings

### For GitHub Pages:
1. Create a file `public/CNAME` with your domain:
   ```
   yourdomain.com
   ```
2. Configure your DNS:
   - Add A records or CNAME as instructed
3. Redeploy

## Common Issues & Solutions

### ❌ "Module not found: tailwindcss"
```bash
npm install -D tailwindcss @tailwindcss/postcss autoprefixer postcss
```

### ❌ "Build failed"
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### ❌ "Routes not working after deployment"
Make sure your hosting platform is configured for single-page apps (SPA).
- Set error page to `index.html`
- Enable SPA mode in settings

### ❌ "Assets not loading"
Check the `base` path in `vite.config.js` matches your deployment URL.

## Next Steps

After deployment:

1. ✅ **Share your portfolio**:
   - Update your LinkedIn profile
   - Add to your resume
   - Share on social media

2. ✅ **Monitor performance**:
   - Enable analytics (Vercel/Netlify Analytics or Google Analytics)
   - Check mobile responsiveness

3. ✅ **Keep it updated**:
   - Add new projects
   - Update experience
   - Refresh skills

4. ✅ **Set up automatic deployments**:
   - Most platforms auto-deploy on git push
   - Enable for continuous updates

## Need More Help?

- 📖 **Detailed Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- 🤖 **Interactive Script**: Run `./deploy.sh` for guided deployment
- 🔧 **Build Locally**: Run `npm run build` to test before deploying
- 🌐 **Preview Build**: Run `npm run preview` to test production build

## Support

If you run into issues:
1. Check the [DEPLOYMENT.md](./DEPLOYMENT.md) troubleshooting section
2. Review your platform's documentation
3. Verify all dependencies are installed correctly

---

## Congratulations! 🎉

Your portfolio is now live on the internet! 

**Remember to:**
- ⭐ Star this repository if it helped you
- 🔄 Keep your portfolio updated
- 📧 Update your contact information
- 🔗 Share with potential employers/clients

Good luck with your job search or freelance journey! 💪
