# Tushar Parlikar - React Portfolio v2.0

This is my personal portfolio website, rebuilt from the ground up with a focus on modern web technologies, interactivity, and dynamic content. It showcases my projects, skills, and professional journey using React, Vite, and Tailwind CSS, enhanced with GSAP and Three.js for a fluid and engaging user experience.

## Key Changes in v2.0

- **Interactive 3D Hero:** Replaced the previous 3D model with a dynamic, cursor-following torus knot powered by Three.js for a more engaging entry point.
- **GSAP & ScrollTrigger Animations:** Integrated the GreenSock Animation Platform (GSAP) for high-performance, scroll-based animations, starting with the new "What's New" ticker.
- **Revamped Projects Section:** The projects gallery is now fully interactive, featuring search and filtering capabilities to easily navigate through my work.
- **"What's New" Ticker:** Added a scrolling news ticker to announce recent achievements, project updates, and news in real-time.
- **Dynamic Skills Showcase:** The skills section is no longer static. It now accurately reflects the technologies used across my projects, grouped by domain for clarity.
- **Refined Experience Section:** Updated and streamlined the presentation of my work and educational experience.
- **Live Resume Link:** The resume button now directs to a live, up-to-date document on Google Drive.

## Upcoming Features

- **Dark/Light Mode Toggle:** A theme switcher to allow users to choose their preferred viewing mode.
- **Advanced Mobile Optimization:** Further enhancements to ensure a seamless experience on all mobile devices.
- **Contact Form Enhancements:** Improving the functionality and feedback of the contact form.
- **Expanded GSAP Animations:** Rolling out more sophisticated and creative animations across all sections of the portfolio.

## Technologies Used

- **Frontend:** React, Vite, Tailwind CSS
- **Animation:** GSAP (GreenSock Animation Platform), Framer Motion (for specific components)
- **3D Graphics:** Three.js
- **Icons:** Boxicons
- **Deployment:** Vercel/Netlify (or your host)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/TusharParlikar/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

## Building for Production

To create a production-ready build:
```bash
npm run build
```
This command bundles the application into the `dist` directory. To preview the production build locally, run:
```bash
npm run preview
```
