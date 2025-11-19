# Anurag - Portfolio Website

A modern, responsive portfolio website built with cutting-edge web technologies.

![Portfolio Preview](https://github.com/user-attachments/assets/31eebffe-522f-4a5c-955b-dfa8ddd47a3d)

## 🚀 Features

- ✨ Modern, clean design with gradient backgrounds
- 🎨 Fully responsive layout for all devices
- ⚡ Fast performance with Vite
- 🎭 Smooth animations using Framer Motion
- 📱 Mobile-friendly navigation
- 🎯 SEO-optimized structure
- 📧 Contact form ready for integration
- 🚀 Production-ready build configuration

## 🛠️ Technologies Used

- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Icon library for social media and UI elements

## 📦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nigdifg/AnuragResumePortfolio.git
cd AnuragResumePortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills and technologies
│   ├── Projects.tsx    # Featured projects
│   ├── Contact.tsx     # Contact form and info
│   ├── Navigation.tsx  # Navigation bar
│   └── Footer.tsx      # Footer component
├── App.tsx             # Main app component
├── main.tsx            # Application entry point
└── index.css           # Global styles with Tailwind
```

## 🎨 Customization

### Update Personal Information

Edit the component files in `src/components/` to update:
- Personal bio in `About.tsx`
- Skills and technologies in `Skills.tsx`
- Project portfolio in `Projects.tsx`
- Contact information in `Contact.tsx`
- Social media links in `Hero.tsx` and `Footer.tsx`

### Change Colors

Update the color scheme in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Your primary color
      secondary: '#8B5CF6',  // Your secondary color
      dark: '#0F172A',       // Dark background
      light: '#F8FAFC',      // Light background
    },
  },
}
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Anurag**

- GitHub: [@nigdifg](https://github.com/nigdifg)

---

Made with ❤️ using React & Tailwind CSS
