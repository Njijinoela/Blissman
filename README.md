# Blissman

**Blissman** is a modern, professional web hosting & IT support website built with React and Vite. Its aim is to provide a polished, responsive, and user-friendly front end for showcasing hosting services, support offerings, portfolios, and more.

Live Demo: [blissman.vercel.app](https://blissman.vercel.app) :contentReference[oaicite:0]{index=0}

---

## 🧰 Features

- Responsive, clean UI layout
- Multiple service sections (hosting, support, etc.)
- Modern front-end tech stack (React + Vite)
- ESLint configuration for code quality
- Easy to extend and maintain

---

## 📁 Project Structure

```

/
├── public/                 # Static assets (images, favicon, etc.)
├── src/                    # Source code (components, pages, styles)
├── .gitignore
├── eslint.config.js        # ESLint configuration
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── vercel.json             # Vercel deployment settings
└── LICENSE

```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 16.x recommended)
- npm or yarn

### Installation

1. Clone the repo
   ```bash
   git clone https://github.com/Njijinoela/Blissman.git
   cd Blissman
   ```

````

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser at `http://localhost:5173` (or whatever port Vite assigns)

### Building for Production

```bash
npm run build
# or
yarn build
```

This will output a **dist/** folder with optimized static files.

### Preview Production Build (Locally)

```bash
npm run preview
# or
yarn preview
```

---

## ⚙️ Configuration & Deployment

* `vite.config.js` — configuration for Vite build, plugins, base path
* `vercel.json` — settings for deployment to Vercel
* `eslint.config.js` — linting rules and code quality enforcement

When deploying to Vercel (or a similar platform), ensure that the build command is `npm run build` and the output directory is the default `dist`.

---

## 🙌 Contributing

Contributions are welcome! If you’d like to:

* add new features or pages
* improve styling or responsiveness
* fix bugs
* optimize performance

…please fork the repository, make your changes, and open a pull request. Be sure to adhere to code quality and linting rules.

---

## 📄 License

This project is licensed under the **MIT License**. ([GitHub][1])

---

## 📝 Notes & Future Work

* Add a CMS or headless backend to manage content dynamically
* Support multilingual content
* Integrate with an email/contact backend
* Add more interactive UI components (sliders, modals, etc.)
* Improve performance, accessibility, and SEO

---

````
