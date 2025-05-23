import React from 'react';
import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {  return (
    <main id="about" className='relative flex flex-col lg:flex-row items-center justify-between min-h-screen w-full overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-24 sm:pt-28 md:pt-32 lg:pt-36'>
        
        {/* 3D Robot - Mobile first (top), Desktop (right) */}
        <div className='w-full h-64 sm:h-80 md:h-96 lg:hidden mb-8'>
            <Spline 
                className='w-full h-full shadow-2xl' 
                scene="https://prod.spline.design/PqH7zLnwGVUTO3PJ/scene.splinecode" 
            />
        </div>

        <div 
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className='relative z-20 w-full max-w-xl lg:w-1/2 mb-8 lg:mb-0'>            {/* Tag box with gradient border */}
            <div className='relative w-40 sm:w-44 md:w-48 h-8 sm:h-9 md:h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full shadow-[0_0_25px_rgba(255,255,255,0.6),0_0_50px_rgba(233,155,99,0.3)] mb-6 sm:mb-7 md:mb-8'>
                <div className='absolute inset-[2px] sm:inset-[2.5px] md:inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 px-2 sm:px-2.5 md:px-3 shadow-inner'>
                    <i className='bx bx-code-alt text-white text-xs sm:text-sm drop-shadow-lg'></i>
                    <span className='text-[10px] sm:text-xs font-medium text-white drop-shadow-lg'>MERN DEVELOPER</span>
                </div>
            </div>
              {/* Main Heading */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
                TUSHAR
                <br />
                PARLIKAR
            </h1>
            
            <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] mb-8'>
                Self-motivated and innovative MERN Stack Developer with a strong interest in building scalable web
                and blockchain applications. Passionate about integrating AI and Web3 technologies to create
                impactful solutions.
            </p>            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 items-start'>
                <a href="#projects" className='bg-white text-black py-3 px-8 rounded-full font-medium transition-all duration-300 hover:bg-gray-200 inline-block text-center'>
                    View Projects
                </a>
                
                <a href="#contact" className='flex items-center gap-2 text-white py-3 px-8 rounded-full border border-gray-600 font-medium transition-all duration-300 hover:border-white'>
                    <i className='bx bx-envelope text-lg'></i>
                    Contact Me
                </a>
            </div></div>
                {/* 3D Robot - Only visible on desktop */}
                
     <Spline 
     
     className='absolute lg:top-0 lg:bottom-0 lg:left-[25%] h-full hidden lg:block'
     data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"
     data-aos-duration="3000"
     scene="https://prod.spline.design/PqH7zLnwGVUTO3PJ/scene.splinecode" 
     
     />
    

    </main>
  )
}

export default Hero