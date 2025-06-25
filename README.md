# 🚀 Tushar Parlikar - Web Developer Portfolio

![React](https://img.shields.io/badge/React-18-blue) 
![Vite](https://img.shields.io/badge/Vite-4-purple) 
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC) 
![ThreeJS](https://img.shields.io/badge/Three.js-black)
![GSAP](https://img.shields.io/badge/GSAP-Animation-green)

<p align="center">
  <a href="https://portfolio-7m5o.vercel.app/">
    <img src="public/gradient.png" alt="Portfolio Preview" width="600" />
  </a>
</p>

A modern, interactive portfolio built with React, featuring 3D elements, animations, and a secure contact system. Designed to showcase my projects and skills in web development.

**✨ [Live Portfolio](https://portfolio-7m5o.vercel.app/) ✨**

## 📑 Table of Contents
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Quick Start](#-quick-start)
- [Environment Setup & Security](#-environment-setup--security)
- [Deployment](#-deployment)
- [SEO Features](#-seo-features)
- [License](#-license)
- [Contact & Connect](#-contact--connect)

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎮 **Interactive 3D Elements** | Dynamic, cursor-following 3D elements powered by Three.js |
| 🔄 **GSAP Animations** | Smooth scroll-based animations using GreenSock Animation Platform |
| 📱 **Fully Responsive** | Optimized experience across all devices from mobile to desktop |
| 🖼️ **Project Gallery** | Interactive showcase with filtering and search capabilities |
| 📰 **"What's New" Ticker** | Scrolling news ticker for recent achievements and updates |
| 🛠️ **Skills Visualization** | Technology skills grouped by domain with visual indicators |
| ⏳ **Interactive Timeline** | Clean, visual presentation of work and educational experience |
| 📬 **Secure Contact System** | MongoDB-backed forms with EmailJS integration |
| 🔒 **Server-side Processing** | Secure data handling via Vercel API routes |

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="center"><strong>Frontend</strong></td>
    <td>
      <img src="https://img.shields.io/badge/React-18-blue?logo=react" alt="React" /><br/>
      <img src="https://img.shields.io/badge/Vite-4-purple?logo=vite" alt="Vite" /><br/>
      <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css" alt="Tailwind" />
    </td>
  </tr>
  <tr>
    <td align="center"><strong>Animation</strong></td>
    <td>
      <img src="https://img.shields.io/badge/GSAP-Animation-green" alt="GSAP" /><br/>
      <img src="https://img.shields.io/badge/Framer-Motion-ff69b4" alt="Framer Motion" /><br/>
      <img src="https://img.shields.io/badge/Three.js-black?logo=three.js" alt="Three.js" />
    </td>
  </tr>
  <tr>
    <td align="center"><strong>Backend</strong></td>
    <td>
      <img src="https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb" alt="MongoDB" /><br/>
      <img src="https://img.shields.io/badge/EmailJS-Email-yellow" alt="EmailJS" /><br/>
      <img src="https://img.shields.io/badge/Vercel-API_Routes-black?logo=vercel" alt="Vercel API" />
    </td>
  </tr>
</table>

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/TusharParlikar/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your credentials

# Start development server
npm run dev
```

Your site should now be running at `http://localhost:5173`!

## 🔐 Environment Setup & Security

This project uses environment variables for secure API integration. **Never commit your actual `.env` file to version control.**

### Required Environment Variables

| Variable | Purpose |
|----------|---------|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `VITE_EMAILJS_REQUIREMENTS_TEMPLATE_ID` | EmailJS requirements form template |
| `VITE_MONGODB_URI` | MongoDB connection string |

### Security Features

- ✅ All sensitive credentials stored as environment variables
- ✅ MongoDB operations handled server-side via Vercel API routes
- ✅ Form submissions processed through secure endpoints
- ✅ Sensitive files excluded via `.gitignore`

## 🌐 Deployment

This project is deployed on Vercel at [portfolio-7m5o.vercel.app](https://portfolio-7m5o.vercel.app/).

### Deploying Your Own Version

1. Fork this repository
2. Connect your fork to Vercel
3. Configure environment variables in the Vercel dashboard
4. Deploy and enjoy!

### Updating Your Deployment

```bash
# After making changes, commit and push
git add .
git commit -m "Description of your changes"
git push origin main
```

Vercel will automatically detect the push and deploy your changes.

## 🔍 SEO Features

This portfolio includes comprehensive SEO optimization:

- ✅ Optimized meta tags for search visibility
- ✅ Structured data with JSON-LD markup
- ✅ Sitemap and robots.txt configuration
- ✅ Open Graph and Twitter Card tags for social sharing
- ✅ Mobile-responsive design for better ranking
- ✅ Semantic HTML structure and clean URLs

## 📜 License

MIT License

## 📬 Contact & Connect

<p align="center">
  <a href="mailto:tparlikar497@gmail.com">
    <img src="https://img.shields.io/badge/Email-tparlikar497%40gmail.com-red?style=for-the-badge&logo=gmail" alt="Email" />
  </a>
  <a href="https://github.com/TusharParlikar">
    <img src="https://img.shields.io/badge/GitHub-TusharParlikar-black?style=for-the-badge&logo=github" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/tushar-parlikar-98272b292/">
    <img src="https://img.shields.io/badge/LinkedIn-Tushar_Parlikar-blue?style=for-the-badge&logo=linkedin" alt="LinkedIn" />
  </a>
</p>

---

<p align="center">
  <i>Thanks for checking out my portfolio! Feel free to reach out for collaboration or questions.</i>
</p>
