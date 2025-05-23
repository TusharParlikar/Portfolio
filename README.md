# Tushar Parlikar - Portfolio Website

This is my personal portfolio website built with React and Vite, showcasing my projects, skills, and experience.

## Features

- Modern, responsive design
- Interactive 3D models with Spline
- Smooth scrolling and animations with AOS
- Contact form with EmailJS integration
- Dark theme with gradient accents

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/TusharParlikar/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   - Copy `.env.example` to create a new file called `.env`
   ```
   cp .env.example .env
   ```
   - Fill in your EmailJS credentials in the `.env` file
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   - See `EmailJS-Setup-Guide.md` for detailed instructions on setting up EmailJS

4. Start the development server
   ```
   npm run dev
   ```

## Building for Production

To create a production build:
```
npm run build
```

To preview the production build locally:
```
npm run preview
```

## Technologies Used

- React
- Vite
- Tailwind CSS
- EmailJS
- AOS (Animate On Scroll)
- Spline 3D
- Boxicons
