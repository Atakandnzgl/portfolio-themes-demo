# Portfolio Themes Demo

A showcase of modern portfolio themes built with Next.js and Material-UI.

## 🎨 Available Themes

- **Aura** - Minimalist black & white design
- **Modern** - Clean and contemporary layout  
- **Persona** - Personal and creative style
- **Tech** - Technology-focused theme

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio-themes-demo

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the demo.

## 📦 Deploy Options

### 1. Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### 2. Netlify
```bash
# Build the project
npm run build

# Deploy to Netlify (drag & drop the out folder)
```

### 3. GitHub Pages
```bash
# Add to package.json
"scripts": {
  "export": "next build && next export"
}

# Build and export
npm run export

# Deploy the out folder to GitHub Pages
```

## 🛠️ Customization

### Update Portfolio Data
Edit the `mockPortfolio` object in `pages/index.tsx`:

```typescript
const mockPortfolio = {
  firstName: 'Your Name',
  lastName: 'Your Last Name',
  imgUrl: 'your-image-url',
  about: 'Your description',
  role: 'Your Role',
  // ... other fields
}
```

### Add New Themes
1. Create theme component in `components/themes/`
2. Add theme to the `themes` array in `pages/index.tsx`
3. Update the `ThemeComponent` switch statement

## 📁 Project Structure

```
portfolio-themes-demo/
├── components/
│   └── themes/
│       ├── aura/
│       ├── modern/
│       ├── persona/
│       └── tech/
├── pages/
│   ├── _app.tsx
│   └── index.tsx
├── public/
├── styles/
│   └── globals.css
├── package.json
├── next.config.js
└── README.md
```

## 🎯 Features

- ✅ Responsive design
- ✅ Dark/Light mode support
- ✅ Material-UI components
- ✅ TypeScript support
- ✅ SEO optimized
- ✅ Fast loading

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.
