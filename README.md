# Anurag Resume Portfolio

A modern, interactive portfolio website with a unique OS-style interface built with React, Vite, and TailwindCSS.

## 🚀 Features

- **OS-Style Interface**: Unique desktop/mobile OS experience
- **Interactive Apps**: Resume viewer, projects showcase, terminal, calendar scheduler
- **Fully Responsive**: Optimized for both desktop and mobile devices
- **Modern Tech Stack**: React 19, Vite, TailwindCSS, Framer Motion
- **Fast Performance**: Optimized build with lazy loading

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/nigdifg/AnuragResumePortfolio.git
cd AnuragResumePortfolio/anurag-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📦 Deployment

**🚀 New to deployment? Start here: [QUICKSTART.md](./QUICKSTART.md)**

**For detailed instructions, see: [DEPLOYMENT.md](./DEPLOYMENT.md)**

### Quick Deploy Options:

#### Vercel (Recommended - Fastest)
```bash
npm install -g vercel
cd anurag-portfolio
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
cd anurag-portfolio
npm run build
netlify deploy --prod
```

#### GitHub Pages
```bash
cd anurag-portfolio
npm install --save-dev gh-pages
npm run deploy
```

For detailed instructions on deploying to Vercel, Netlify, GitHub Pages, Cloudflare Pages, Firebase, AWS S3, and more, please refer to the [DEPLOYMENT.md](./DEPLOYMENT.md) guide.

## 📁 Project Structure

```
AnuragResumePortfolio/
├── anurag-portfolio/
│   ├── src/
│   │   ├── App.jsx          # Main application component
│   │   ├── main.jsx         # Entry point
│   │   ├── index.css        # Global styles
│   │   └── assets/          # Static assets
│   ├── public/              # Public files
│   ├── index.html           # HTML template
│   ├── package.json         # Dependencies
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.js   # TailwindCSS configuration
│   └── postcss.config.js    # PostCSS configuration
├── DEPLOYMENT.md            # Deployment guide
└── README.md               # This file
```

## 🎨 Customization

To customize the portfolio for your own use:

1. **Update Personal Info**: Edit `SYSTEM_DATA` in `src/App.jsx`
2. **Modify Colors**: Update `tailwind.config.js`
3. **Add/Remove Apps**: Modify the `APPS` array in `src/App.jsx`
4. **Change Background**: Update the background image URL in `src/App.jsx`

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🛡️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite (with Rolldown)
- **Styling**: TailwindCSS 4 + PostCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Anurag**
- Role: System Engineer @ TCS
- Email: maurya1985anurag@gmail.com
- LinkedIn: [Anurag](https://www.linkedin.com/in/anurag-91a137203/)

## 🌟 Show your support

Give a ⭐️ if this project helped you!
