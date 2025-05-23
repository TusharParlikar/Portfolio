import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);  
  const navItems = [
    { label: 'ABOUT', to: '#about' },
    { label: 'EXPERIENCE', to: '#experience' },
    { label: 'PROJECTS', to: '#projects' },
    { label: 'SKILLS', to: '#skills' }
  ];

  const linkClasses = 'text-base tracking-wider transition-colors hover:text-red-600 ml-4 p-2';
  const mobileLinkClasses = 'text-base tracking-wider transition-colors hover:text-red-600 py-3 border-b border-gray-800';  
    return (
    <header className='fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-4 lg:px-20 z-50 bg-black/80 backdrop-blur-sm'>
      <h1 
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className='text-3xl md:text-4xl lg:text-5xl font-light m-0'
      >
        TUSHAR
      </h1>
        {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center">
        {navItems.map((item, index) => (
          <a 
            key={item.label}
            href={item.to} 
            className={linkClasses}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration={1000 + (index * 500)}
            style={{ 
              pointerEvents: 'auto',
              zIndex: 10,
              position: 'relative'
            }}
          >
            {item.label}
          </a>
        ))}
      </nav><a 
        href="/Tushar_Parlikar_Resume.pdf" 
        download
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="3000"
        className='hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50'
      >
        RESUME
      </a>

      {/* Mobile menu button */}
      <button 
        className='md:hidden text-white text-2xl p-2 cursor-pointer'
        style={{ 
          pointerEvents: 'auto',
          zIndex: 10,
          position: 'relative'
        }}
        onClick={toggleMobileMenu}
      >
        <i className={`bx ${isMobileMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
      </button>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className='absolute top-full left-0 right-0 w-full bg-black/95 backdrop-blur-sm md:hidden z-50'>          <nav className="flex flex-col py-6 px-4 text-left">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.to} 
                className={mobileLinkClasses}
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}            <a 
              href="/Tushar_Parlikar_Resume.pdf"
              download
              className='bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer mt-4 self-start'
              onClick={closeMobileMenu}
            >
              RESUME
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

