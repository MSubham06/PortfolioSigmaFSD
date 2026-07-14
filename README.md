# Sigma-Portfolio 🚀

**Live and actively maintained!**

![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![Tech](https://img.shields.io/badge/Stack-React%20|%20Vite%20|%20Vercel-blue?style=for-the-badge)
![Focus](https://img.shields.io/badge/Focus-Full%20Stack%20Web%20Dev-orange?style=for-the-badge)

> **"A complete log of my Sigma Batch learning journey from the very first HTML line to advanced backend modules."**

🔗 **Live Site:** [portfolio-sigma-fsd.vercel.app](https://portfolio-sigma-fsd.vercel.app/)

## 📖 Table of Contents
- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Technologies Used](#-technologies-used)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Adding a New Module](#-adding-a-new-module)
- [Contact](#-contact)

---

## 👨‍💻 About The Project

**Sigma-Portfolio** is a personal portfolio and learning-log site built to showcase my journey as a Full Stack Web Developer and student of the **Apna College Sigma Batch**.

Originally built in vanilla HTML/CSS/JS, this project was fully rebuilt from scratch in 2026 using **React + Vite** — every section redesigned with a consistent black-and-yellow design language, smooth scroll animations, and a dedicated "Code Journey" section documenting every module I complete along the way.

## 🌟 Key Features

* ⚛️ **React 18 + Vite** — fast dev/build cycle, component-based architecture
* 🎨 **Custom design system** — black/yellow (`#ffeb3b`) palette, Space Grotesk + Poppins typography
* 📸 **Polaroid-style photo elements** — tilted, floating hover animations as a signature visual motif
* 📊 **Scrolling marquee strips** — auto-animating Stats and Tech Stack sections
* 📂 **Code Journey section** — a browsable grid of every learning module, complete with title, description, and a direct link to the code on GitHub
* mb️ **Working Contact Form** — Formspree integration with a branded success-state screen, no backend required
* 📱 **Fully Responsive** — dedicated mobile breakpoints (900px / 600px / 480px / 400px) across every section
* 🌫️ **Scroll fade effect** — fixed gradient overlay behind the navbar for smooth content transitions
* 🚀 **Live on Vercel** — auto-deploys on every push to `main`

## 🛠 Technologies Used

* **React 18 + Vite** — component structure, fast builds
* **JavaScript (ES6+)** — hooks, async/await, Fetch API
* **CSS3** — custom properties, gradients, backdrop-filter, keyframe animations
* **Formspree** — contact form email delivery
* **Vercel** — hosting and CI/CD deployment

## 📂 Folder Structure

```text
PortfolioSigmaFSD/
├── frontend/                 # React + Vite application
│   ├── public/
│   ├── src/
│   │   ├── assets/            # Images: sigmalogo, profile photos, etc.
│   │   ├── components/        # Navbar, Loader, Home, About, StatsStrip,
│   │   │                      # TechStrip, CodeJourney, Contact, Footer
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── modules/                   # Daily Sigma Batch module code
│   ├── M0-8/
│   ├── M9/
│   ├── M10/
│   └── ... (M11–M24)
└── README.md
```

## 🚀 Getting Started

```bash
git clone https://github.com/MSubham06/PortfolioSigmaFSD.git
cd PortfolioSigmaFSD/frontend
npm install
npm run dev
```

## 🌐 Deployment

The site is deployed on **Vercel**, connected directly to this GitHub repo:
- **Root Directory:** `frontend`
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

Every push to `main` automatically triggers a new deployment.

## ➕ Adding a New Module

The Code Journey section is manually curated — to add a new module:

1. Push your module's code to `modules/M<number>/`
2. Open `frontend/src/components/CodeJourney.jsx`
3. Add a new object at the **top** of the `modules` array:
```jsx
   { id: 'M25', title: 'Your module topic', description: 'What you built or learned.' },
```
4. Commit and push — the live site updates automatically via Vercel

---

## 📬 Contact

**M Subham**
Full Stack Web Developer | B.Tech CSE (AI & ML)

<div align="left">
<a href="https://www.linkedin.com/in/msubham/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="https://github.com/MSubham06" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a>
<a href="https://www.instagram.com/irl.subhhh" target="_blank"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" /></a>
</div>

---
<p align="center"> Made with 💛 by Subham <br/> © 2026 Rebuilt with React, Deployed on Vercel </p>