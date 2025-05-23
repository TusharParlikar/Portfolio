import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import handleSmoothScroll from './utils/scrollUtils';

const App = () => {
  useEffect(()=>{
    AOS.init({
      duration:1500,
      once:true,
    })
    
    // Initialize smooth scrolling with offset
    handleSmoothScroll();
  }, [])
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Gradient image */}
      <img 
        src="/gradient.png" 
        alt="img" 
        className='absolute top-0 right-0 opacity-60 z-0'
      />
      {/* Blur Effect */}
      <div className='h-96 w-96 absolute top-[20%] right-[-10%] bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-3xl opacity-30 -rotate-[30deg] -z-10'>
      </div>
      <Header/>
      <Hero/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App