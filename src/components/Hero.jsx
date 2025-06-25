import React, { useEffect, useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import DancingRobot from './DancingRobot';

const Hero = () => {
    const [showModel, setShowModel] = useState(false);
    const [shouldHide3D, setShouldHide3D] = useState(false);

    useEffect(() => {
        const checkViewportSize = () => {
            // Hide 3D object if screen size is smaller than 1020x668
            const shouldHideModel = window.innerWidth < 1020 || window.innerHeight < 668;
            setShouldHide3D(shouldHideModel);
        };
        
        // Initial check
        checkViewportSize();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkViewportSize);
        
        // Show model only if viewport is large enough
        if (!shouldHide3D) {
            setShowModel(true);
        } else {
            setShowModel(false);
        }
        
        // Cleanup event listener
        return () => window.removeEventListener('resize', checkViewportSize);
    }, [shouldHide3D]);

    return (
    <main id="about" className='relative flex flex-col lg:flex-row items-center justify-between min-h-screen w-full overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-24 sm:pt-28 md:pt-32 lg:pt-36'>
        
       

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
            </div>
        </div>        {/* 3D Dancing Robot Viewer - Desktop Only */}
        <div 
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className='relative z-50 w-full lg:w-1/2 flex items-center justify-center overflow-hidden'
            style={{ height: '600px' }}>
            
            {!shouldHide3D ? (
                // Large Viewport: Show 3D Model
                showModel ? (
                    <div className="w-full h-full">
                        <DancingRobot />
                    </div>
                ) : (
                    <div 
                        className="w-full h-[400px] max-w-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center"
                        style={{
                            background: 'linear-gradient(135deg, rgba(101,101,101,0.1), rgba(233,155,99,0.1))'
                        }}
                    >
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                            <p className="text-white/80 text-sm">Loading Dancing Robot...</p>
                        </div>
                    </div>
                )
            ) : (
                // Small Viewport: Show optimized fallback
                <div className="mobile-hero-fallback w-full h-[400px] max-w-[500px] rounded-2xl flex items-center justify-center text-center"
                     style={{
                         background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                         boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 15px 25px rgba(102,126,234,0.3)'
                     }}>
                    <div className="mobile-hero-content text-white px-6">
                        <div className="mb-4">
                            <i className='bx bx-code-alt text-4xl mb-2 drop-shadow-lg'></i>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2 drop-shadow-lg">
                            Tushar Parlikar
                        </h2>
                        <p className="text-lg opacity-90 mb-2 drop-shadow-lg">
                            MERN Stack Developer
                        </p>
                        <p className="text-base opacity-80 drop-shadow-lg">
                            Building Modern Web Experiences
                        </p>
                        <div className="mt-4 flex justify-center space-x-4">
                            <i className='bx bxl-react text-2xl opacity-80'></i>
                            <i className='bx bxl-nodejs text-2xl opacity-80'></i>
                            <i className='bx bxl-mongodb text-2xl opacity-80'></i>
                            <i className='bx bxl-javascript text-2xl opacity-80'></i>
                        </div>
                    </div>
                </div>
            )}
        </div>

    </main>
  )
}

export default Hero