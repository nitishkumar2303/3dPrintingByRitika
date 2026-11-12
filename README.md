# 3D Printing By Ritika — React JS Frontend

Official bespoke storefront and WhatsApp order configurator for **3D PRINTING BY RITIKA** (*Gifts Made Just for You*), founded by **Ritika Goel** in Shamli, Uttar Pradesh.

## Tech Stack
- **Frontend**: React 19 (`.jsx` / `.js` — pure JavaScript, zero TypeScript `.tsx` files)
- **Bundler**: Vite (`vite.config.js`)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React

## Project Structure
```text
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── assets/
│       └── extracted/
│           ├── brandLogo.jpg
│           ├── pencilHolder.jpg
│           ├── initialStand.jpg
│           ├── namePlaque.jpg
│           ├── longStand.jpg
│           └── sweetCravingsProfile.jpg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── studioData.js
    ├── utils/
    │   ├── whatsapp.js
    │   └── whatsapp.test.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── ProductCollection.jsx
        ├── CustomAndStory.jsx
        ├── WhatsAppOrderBuilder.jsx
        ├── PoliciesAndFaq.jsx
        └── SisterBrandAndFooter.jsx
```

## Running Locally
```bash
npm install
npm run dev
```

## Deploying to GitHub Pages / Vercel / Netlify / Render
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 3D Printing By Ritika React JS website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. Connect the repository to **Vercel**, **Netlify**, or **Render Static Sites**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
