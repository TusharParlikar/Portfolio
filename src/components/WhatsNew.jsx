import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhatsNew = () => {
  const tickerRef = useRef();
  const containerRef = useRef();

  // Sample news/updates data
  const newsItems = [
    "🚀 New Job Portal project launched (Trial Phase)",
    "📦 SmartBookmark VS Code Extension featured in VS Code marketplace",
    "⚙️ Toolkit React CLI reached 100+ weekly downloads on NPM",
    "🎯 Portfolio redesigned with interactive 3D elements and GSAP animations",
    "💼 Available for freelance and full-time opportunities",
    "🔥 Currently exploring AI/ML and blockchain development",
    "📚 Learning advanced React patterns and Next.js 14",
    "🌟 Open to collaboration on innovative web3 projects",
    "🎨 Specialized in GSAP animations and Three.js experiences",
    "⚡ Expert in Javascript, Solidity, and modern web technologies"
  ];

  useEffect(() => {
    const ticker = tickerRef.current;
    const container = containerRef.current;

    if (!ticker || !container) return;

    // Create GSAP timeline for the ticker animation
    const tl = gsap.timeline({ repeat: -1 });

    // Animate the ticker from right to left
    tl.to(ticker, {
      xPercent: -50,
      duration: 40,
      ease: "none"
    });

    // ScrollTrigger to control animation based on scroll
    ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => tl.play(),
      onLeave: () => tl.pause(),
      onEnterBack: () => tl.play(),
      onLeaveBack: () => tl.pause()
    });

    // Pause animation on hover
    const handleMouseEnter = () => tl.pause();
    const handleMouseLeave = () => tl.play();

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className='relative w-full bg-gradient-to-r from-[#e99b63]/10 to-transparent py-4 overflow-hidden border-y border-gray-800/50'
    >
      <div className='flex items-center gap-8'>
        {/* What's New Label */}
        <div className='flex-shrink-0 bg-[#e99b63] text-black px-4 py-2 rounded-full font-medium text-sm z-10 shadow-lg'>
          <i className='bx bx-news mr-2'></i>
          What's New
        </div>

        {/* Scrolling News Ticker */}
        <div className='flex-1 overflow-hidden'>
          <div 
            ref={tickerRef}
            className='flex gap-8 whitespace-nowrap'
          >
            {/* First set of news items */}
            {newsItems.map((item, index) => (
              <div key={index} className='flex items-center gap-2 text-gray-300 flex-shrink-0'>
                <span className='text-[#e99b63] text-lg'>•</span>
                <span className='text-sm font-medium'>{item}</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {newsItems.map((item, index) => (
              <div key={`duplicate-${index}`} className='flex items-center gap-2 text-gray-300 flex-shrink-0'>
                <span className='text-[#e99b63] text-lg'>•</span>
                <span className='text-sm font-medium'>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fade gradients for smooth edges */}
        <div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10'></div>
        <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10'></div>
      </div>
    </section>
  );
};

export default WhatsNew;
