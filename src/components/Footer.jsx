import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 border-t border-gray-800'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center'>
        <p className='text-gray-400 text-sm mb-4 md:mb-0'>
          &copy; {currentYear} Tushar Parlikar. All rights reserved.
        </p>
        
        <div className='flex gap-6'>          <a href='mailto:tparlikar497@gmail.com' className='text-gray-400 hover:text-white transition-colors'>
            <i className='bx bx-envelope text-xl'></i>
          </a>
          <a href='https://www.linkedin.com/in/tushar-parlikar-98272b292/' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white transition-colors'>
            <i className='bx bxl-linkedin text-xl'></i>
          </a>
          <a href='https://github.com/TusharParlikar' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white transition-colors'>
            <i className='bx bxl-github text-xl'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
