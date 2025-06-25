import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import WhatsNew from './components/WhatsNew'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ClientRequirementsForm from './components/ClientRequirementsForm'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// Home page component
const HomePage = () => (
  <>
    <Hero/>
    <WhatsNew/>
    <Experience/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
  </>
);

// Project form page component
const ProjectFormPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-20 pb-8">
    <ClientRequirementsForm />
  </div>
);

const App = () => {
  useEffect(()=>{
    AOS.init({
      duration:1500,
      once:true,
    })
  }, [])
  
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Gradient image - Hidden on mobile for better performance */}
      <img 
        src="/gradient.png" 
        alt="img" 
        className='absolute top-0 right-0 opacity-60 z-0 hidden md:block'
      />
      {/* Blur Effect - Responsive sizing */}
      <div className='h-64 w-64 md:h-96 md:w-96 absolute top-[20%] right-[-10%] bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-3xl opacity-30 -rotate-[30deg] -z-10'>
      </div>
      
      <Header/>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-form" element={<ProjectFormPage />} />
        
      </Routes>
    </main>
  )
}

export default App