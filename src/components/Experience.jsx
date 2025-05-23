import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Experience = () => {
  return (
    <section id="experience" className='relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Title */}
        <h2 
          data-aos="fade-up"
          className='text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider mb-12'
        >
          EXPERIENCE & EDUCATION
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
          {/* Experience Column */}
          <div 
            data-aos="fade-right"
            data-aos-delay="100"
            className='space-y-8'
          >
            <h3 className='text-xl sm:text-2xl font-medium tracking-wide text-gray-200 mb-6'>Work Experience</h3>
            
            {/* Experience 1 */}
            <div className='bg-black/40 border border-gray-800 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-600'>
              <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4'>
                <h4 className='text-lg font-medium text-white'>Frontend Contributor</h4>
                <span className='text-sm font-medium text-gray-400 mt-1 sm:mt-0'>Feb 2025 - Present</span>
              </div>
              <h5 className='text-base text-[#e99b63] mb-2'>ACES Club (MIT-ADT)</h5>
              <p className='text-sm text-gray-400 mb-4'>React.js, Tailwind CSS</p>
              <ul className='list-disc list-inside text-sm text-gray-400 space-y-2'>
                <li>Contributed to official ACES website using React.js and Tailwind CSS, improving site performance by 35%</li>
                <li>Collaborated with cross-functional team members to enhance user interface and successfully deploy version 1.0</li>
              </ul>
            </div>
            
            {/* Experience 2 */}
            <div className='bg-black/40 border border-gray-800 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-600'>
              <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4'>
                <h4 className='text-lg font-medium text-white'>Freelance Frontend Developer</h4>
                <span className='text-sm font-medium text-gray-400 mt-1 sm:mt-0'>Apr 2025</span>
              </div>
              <h5 className='text-base text-[#e99b63] mb-2'>RentAchord</h5>
              <p className='text-sm text-gray-400 mb-4'>React, GSAP, Tailwind CSS</p>
              <ul className='list-disc list-inside text-sm text-gray-400 space-y-2'>
                <li>Independently developed responsive UI/UX for instrument rental startup with GSAP animations and Tailwind CSS</li>
                <li>Delivered project ahead of schedule with 100% client satisfaction and improved conversion rate by 28%</li>
              </ul>
            </div>
          </div>
          
          {/* Education Column */}
          <div 
            data-aos="fade-left"
            data-aos-delay="200"
            className='space-y-8'
          >
            <h3 className='text-xl sm:text-2xl font-medium tracking-wide text-gray-200 mb-6'>Education</h3>
            
            {/* Education 1 */}
            <div className='bg-black/40 border border-gray-800 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-600'>
              <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4'>
                <h4 className='text-lg font-medium text-white'>Bachelor of Technology (B.Tech)</h4>
                <span className='text-sm font-medium text-gray-400 mt-1 sm:mt-0'>Expected 2027</span>
              </div>
              <h5 className='text-base text-[#e99b63] mb-2'>MIT Art, Design and Technology University, Pune</h5>
              <p className='text-sm text-gray-400'>Computer Science and Engineering - Second Year</p>
            </div>
            
            {/* Certifications */}
            <div className='bg-black/40 border border-gray-800 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-600'>
              <h4 className='text-lg font-medium text-white mb-4'>Certifications</h4>
              <ul className='list-disc list-inside text-sm text-gray-400 space-y-3'>
                <li>C/C++ Programming Certification — Advanced programming concepts and data structures</li>
                <li>MERN Stack Development Certification — Full-stack web application development</li>
                <li>Blockchain Development with Solidity — Smart contract development and Web3 integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
