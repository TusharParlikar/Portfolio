// This file adds structured data (JSON-LD) to the website for better SEO
// Import and use this in your App.jsx or main layout component

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Tushar Parlikar",
    "alternateName": "Tushar Vijaykumer Parlikar",
    "description": "MERN Stack Developer specializing in React, Node.js, MongoDB, and modern web technologies",
    "email": "tparlikar497@gmail.com",
    "url": "https://portfolio-7m5o.vercel.app/",
    "image": "https://portfolio-7m5o.vercel.app/logo.png",
    "sameAs": [
      "https://github.com/TusharParlikar",
      "https://www.linkedin.com/in/tushar-parlikar-98272b292/"
    ],
    "knowsAbout": [
      "React", "Node.js", "MongoDB", "Express", "JavaScript", 
      "TypeScript", "HTML", "CSS", "Tailwind CSS", "GSAP", 
      "Three.js", "Web Development", "Full Stack Development"
    ],
    "knowsLanguage": ["English", "Hindi"],
    "jobTitle": "Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Your University or College"
    },
    "skills": "React, Node.js, MongoDB, Express, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, GSAP, Three.js"
  },
  "about": {
    "@type": "WebSite",
    "name": "Tushar Parlikar - Web Developer Portfolio",
    "url": "https://portfolio-7m5o.vercel.app/",
    "description": "Professional portfolio showcasing web development projects, skills and experience of Tushar Parlikar",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://portfolio-7m5o.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  "mainContentOfPage": {
    "@type": "WebPageElement",
    "isPartOf": {
      "@id": "https://portfolio-7m5o.vercel.app/"
    },
    "mainContentOfPage": "Portfolio of Tushar Parlikar, a professional MERN Stack developer specializing in React, Node.js, MongoDB, and modern web technologies."
  },
  "offers": {
    "@type": "Offer",
    "offeredBy": {
      "@type": "Person",
      "name": "Tushar Parlikar"
    },
    "itemOffered": [
      {
        "@type": "Service",
        "name": "Web Development",
        "description": "Custom website development using modern technologies",
        "serviceType": "Web Development"
      },
      {
        "@type": "Service",
        "name": "MERN Stack Development",
        "description": "Full-stack development using MongoDB, Express, React, and Node.js",
        "serviceType": "Application Development"
      }
    ]
  }
};

// Function to add structured data to the document
export const addStructuredData = () => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
};
