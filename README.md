# Tushar Parlikar - React Portfolio v2.0

This is my personal portfolio website, rebuilt from the ground up with a focus on modern web technologies, interactivity, and dynamic content. It showcases my projects, skills, and professional journey using React, Vite, and Tailwind CSS, enhanced with GSAP and Three.js for a fluid and engaging user experience.

## Features

- **Interactive 3D Elements:** Dynamic, cursor-following 3D elements powered by Three.js for an engaging user experience
- **GSAP & ScrollTrigger Animations:** High-performance, scroll-based animations using the GreenSock Animation Platform
- **Responsive Design:** Fully optimized for all devices from mobile to desktop
- **Project Showcase:** Interactive gallery featuring search and filtering capabilities
- **"What's New" Ticker:** Scrolling news ticker to announce recent achievements and updates
- **Dynamic Skills Showcase:** Technology skills grouped by domain with visual indicators
- **Professional Timeline:** Clean presentation of work and educational experience
- **Secure Contact Forms:** MongoDB-backed forms with EmailJS integration
- **API-Based Data Handling:** Secure server-side data processing via Vercel API routes

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animation Libraries:** 
  - GSAP (GreenSock Animation Platform)
  - Framer Motion (for select components)
- **3D Graphics:** Three.js
- **Form Handling:** 
  - EmailJS (for email notifications)
  - MongoDB (for data storage)
- **API Routes:** Vercel Serverless Functions
- **Icons:** Boxicons, React Icons
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/TusharParlikar/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure environment variables
   - Copy `.env.example` to `.env`
   ```bash
   cp .env.example .env
   ```
   - Update the `.env` file with your personal credentials:
     - EmailJS credentials for contact form functionality
     - MongoDB connection string for form data storage

4. Start the development server
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

5. Build for production
   ```bash
   npm run build
   ```

6. Preview production build
   ```bash
   npm run preview
   ```

## Environment Variables

This project uses environment variables for secure API integration. 
**IMPORTANT: Never commit your actual `.env` file to version control.**

### Required Environment Variables

| Variable | Purpose |
|----------|---------|
| VITE_EMAILJS_SERVICE_ID | EmailJS service ID for sending emails |
| VITE_EMAILJS_TEMPLATE_ID | EmailJS template ID for contact form |
| VITE_EMAILJS_PUBLIC_KEY | EmailJS public key for authentication |
| VITE_EMAILJS_REQUIREMENTS_TEMPLATE_ID | EmailJS template for detailed requirements form |
| VITE_MONGODB_URI | MongoDB connection string for form data storage |

### Managing Environment Variables

1. **Local Development**: Create a `.env` file in the project root based on `.env.example`
2. **Production (Vercel)**:
   - Navigate to your project in the Vercel dashboard
   - Go to Settings → Environment Variables
   - Add each variable from the table above with its corresponding value
   - Redeploy your application for changes to take effect

## Security Implementation

- **Environment Variables**: All sensitive credentials are stored as environment variables
- **Server-side Processing**: MongoDB operations happen exclusively on the server via API routes
- **No Client Exposure**: Database credentials never reach the client-side code
- **API Routes**: Form submissions and data retrievals use secure Vercel API endpoints
- **Git Security**: Sensitive files are excluded via `.gitignore`

## Deployment on Vercel

This project is optimized for deployment on Vercel:

1. **Connect Repository**
   - Sign up/in to [Vercel](https://vercel.com)
   - Click "Add New" → "Project"
   - Connect to your GitHub repository
   - Select the repository containing your portfolio

2. **Configure Project**
   - Keep default build settings (Vite is auto-detected)
   - Add all environment variables from the table above
   - Click "Deploy"

3. **Post-Deployment**
   - Verify forms are working correctly
   - Test MongoDB connectivity via contact submissions
   - Set up a custom domain if desired (Settings → Domains)

4. **Updating Environment Variables**
   - Go to your project in the Vercel dashboard
   - Navigate to Settings → Environment Variables
   - Edit existing variables or add new ones
   - Click "Save"
   - Redeploy your application for changes to take effect

## Maintaining Your Portfolio

- **Adding Projects**: Update the projects data in the source code
- **Updating Content**: Modify component content as needed
- **Content Images**: Add new images to the public directory
- **Deployment**: Changes will automatically deploy when pushed to the main branch

## SEO Optimization

This portfolio is optimized for search engines to improve visibility when someone searches for "Tushar Parlikar":

- **Meta Tags**: Proper title, description, and keyword meta tags
- **Semantic HTML**: Proper heading structure and semantic elements for better indexing
- **Performance Optimization**: Fast loading times for better search ranking
- **Mobile Responsiveness**: Fully responsive design (a key ranking factor)
- **Structured Data**: JSON-LD markup for better search appearance
- **Image Optimization**: Compressed images with proper alt text
- **URL Structure**: Clean, descriptive URLs for all sections
- **Social Meta Tags**: Open Graph and Twitter Card tags for better social sharing

To further improve SEO:
1. Register the site with Google Search Console
2. Create backlinks from your social media profiles
3. Regularly update content to signal site activity to search engines
4. Include relevant keywords naturally throughout your content

---

## License

MIT License

## Contact

Tushar Parlikar - tparlikar497@gmail.com

- GitHub: [https://github.com/TusharParlikar](https://github.com/TusharParlikar)
- LinkedIn: [https://www.linkedin.com/in/tushar-parlikar-98272b292/](https://www.linkedin.com/in/tushar-parlikar-98272b292/)
