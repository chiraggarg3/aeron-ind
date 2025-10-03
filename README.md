# Aeron Industries - Coming Soon Landing Page

A beautiful, modern "Coming Soon" landing page built with React, Vite, and Tailwind CSS. Features smooth animations, countdown timer, email signup, and responsive design.

## ✨ Features

- **Beautiful Design**: Modern gradient background with glass-morphism effects
- **Animations**: Smooth animations powered by Framer Motion
- **Countdown Timer**: Real-time countdown to launch date
- **Email Signup**: Capture visitor emails for launch notifications
- **Responsive**: Fully responsive design that works on all devices
- **Fast**: Built with Vite for optimal performance
- **Modern Stack**: React 18, Tailwind CSS, and modern ES6+

## 🚀 Quick Start

### Prerequisites

- Node.js 22.12+ (for Vite compatibility)
- npm or yarn
- Git

### Local Development

```bash
# Install dependencies (like pip install in Python virtual env)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/aeron-ind-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your GitHub repository
   - Go to Settings → Pages
   - Select "GitHub Actions" as source
   - The workflow will automatically deploy on every push to main

3. **Connect Custom Domain (GoDaddy):**
   - In your GitHub repo, go to Settings → Pages
   - Add your custom domain (e.g., `aeronindustries.com`)
   - In GoDaddy DNS settings, add these records:
     ```
     Type: CNAME
     Host: www
     Points to: yourusername.github.io
     
     Type: A
     Host: @
     Points to: 185.199.108.153
     Points to: 185.199.109.153
     Points to: 185.199.110.153
     Points to: 185.199.111.153
     ```

### Option 2: Netlify (Alternative)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Connect your custom domain in Netlify settings

### Option 3: Vercel (Alternative)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

## 🎨 Customization

### Update Content

Edit `/src/components/ComingSoonPage.jsx`:

- **Company Name**: Change "Aeron Industries" to your company name
- **Launch Date**: Modify the countdown timer target date
- **Colors**: Update the gradient in `src/index.css`
- **Social Links**: Update the social media links
- **Email**: Change the contact email

### Styling

The project uses Tailwind CSS. Key files:
- `/src/index.css` - Custom styles and Tailwind configuration
- `/tailwind.config.js` - Tailwind configuration
- Components use Tailwind utility classes

### Add Features

- **Analytics**: Add Google Analytics or similar
- **Email Service**: Integrate with Mailchimp, ConvertKit, etc.
- **CMS**: Connect to Strapi, Contentful, or similar
- **Animation**: Extend animations with Framer Motion

## 📁 Project Structure

```
aeron-ind-website/
├── .github/
│   ├── workflows/
│   │   └── deploy.yml          # GitHub Actions deployment
│   └── copilot-instructions.md # AI assistant instructions
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   └── ComingSoonPage.jsx  # Main landing page component
│   ├── App.jsx                 # Root component
│   ├── index.css              # Tailwind styles
│   └── main.jsx               # Entry point
├── package.json               # Dependencies (like requirements.txt)
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
└── README.md                  # This file
```

## 🔧 Environment Setup (Python Dev Context)

Think of this project structure like a Python project:

- `package.json` = `requirements.txt` (dependencies)
- `node_modules/` = `site-packages/` (installed packages)
- `.nvmrc` = Python version specification
- `npm install` = `pip install -r requirements.txt`
- `npm run dev` = `python manage.py runserver`

## 🚀 Production Checklist

- [ ] Update company name and branding
- [ ] Set correct launch date for countdown
- [ ] Update social media links
- [ ] Add your email address
- [ ] Test email signup functionality
- [ ] Configure DNS with GoDaddy
- [ ] Enable HTTPS
- [ ] Add analytics tracking
- [ ] Test on mobile devices
- [ ] Check page load speed

## 📞 Support

For questions about:
- **React/Vite**: Check the [Vite documentation](https://vitejs.dev/)
- **Tailwind CSS**: Check the [Tailwind documentation](https://tailwindcss.com/)
- **Deployment**: Follow the deployment guides above
- **DNS Setup**: Contact GoDaddy support for domain configuration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React, Vite, and Tailwind CSS

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
