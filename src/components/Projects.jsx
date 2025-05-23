import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Projects = () => {
  return (
    <section id="projects" className='relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-black/20'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Title */}
        <h2 
          data-aos="fade-up"
          className='text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider mb-12'
        >
          PROJECTS
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {/* Project 1 */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className='bg-black/40 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-600 group'
          >
            <div className='h-48 bg-gradient-to-r from-gray-800 to-gray-900 relative overflow-hidden'>
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60'>
                <div className='flex gap-4'>
                  <a href="#" className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all'>
                    <i className='bx bx-link text-xl'></i>
                  </a>
                  <a href="#" className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all'>
                    <i className='bx bxl-github text-xl'></i>
                  </a>
                </div>
              </div>
              <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
                <h3 className='text-lg font-medium'>RentAchord</h3>
                <div className='flex flex-wrap gap-2 mt-2'>
                  <span className='px-2 py-1 text-xs bg-[#e99b63]/20 text-[#e99b63] rounded-full'>React</span>
                  <span className='px-2 py-1 text-xs bg-[#e99b63]/20 text-[#e99b63] rounded-full'>TailwindCSS</span>
                  <span className='px-2 py-1 text-xs bg-[#e99b63]/20 text-[#e99b63] rounded-full'>GSAP</span>
                </div>
              </div>
            </div>
            <div className='p-6'>
              <p className='text-sm text-gray-400 mb-4'>Apr 2025 - Apr 2025</p>
              <ul className='list-disc list-inside text-sm text-gray-400 space-y-2'>
                <li>Developed a musical instrument rental platform with 30% increased user engagement</li>
                <li>Implemented GSAP animations, reducing bounce rate by 25%</li>
                <li>Designed responsive UI and scalable MongoDB schema for 500+ listings</li>
              </ul>
            </div>
          </div>
          
          {/* Project 2 */}
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className='bg-black/40 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-600 group'
          >
            <div className='h-48 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden'>
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60'>
                <div className='flex gap-4'>
                  <a href="#" className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all'>
                    <i className='bx bx-link text-xl'></i>
                  </a>
                  <a href="#" className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all'>
                    <i className='bx bxl-github text-xl'></i>
                  </a>
                </div>
              </div>
              <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
                <h3 className='text-lg font-medium'>Blockchain-Based Medical System</h3>
                <div className='flex flex-wrap gap-2 mt-2'>
                  <span className='px-2 py-1 text-xs bg-[#e99b63]/20 text-[#e99b63] rounded-full'>React</span>
                  <span className='px-2 py-1 text-xs bg-[#e99b63]/20 text-[#e99b63] rounded-full'>Solidity</span>
                  <span className='px-2 py-1 text-xs bg-[#e99b63]/20 text-[#e99b63] rounded-full'>Hardhat</span>
                </div>
              </div>
            </div>
            <div className='p-6'>
              <p className='text-sm text-gray-400 mb-4'>Mar 2025</p>
              <ul className='list-disc list-inside text-sm text-gray-400 space-y-2'>
                <li>Engineered a DApp for storing medical records on Ethereum</li>
                <li>Enabled role-based access via smart contracts in Solidity</li>
                <li>Integrated MetaMask authentication for secure consent</li>
                <li>Improved response time by 60% using decentralized architecture</li>
              </ul>
            </div>
          </div>
          
          {/* Project 3 */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className='bg-black/40 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-600 group'
          >
            <div className='h-48 bg-gradient-to-r from-green-900 to-teal-900 relative overflow-hidden'>
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60'>
                <div className='flex gap-4'>
                  <a href="#" className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all'>
                    <i className='bx bx-link text-xl'></i>
                  </a>
                  <a href="#" className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all'>
                    <i className='bx bxl-github text-xl'></i>
                  </a>
                </div>
              </div>
              <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
                <h3 className='text-lg font-medium'>Assignment Feedback System</h3>
                <div className='flex flex-wrap gap-2 mt-2'>
                  <span className='px-2 py-1 text-xs bg-[#e99b63]/20 text-[#e99b63] rounded-full'>Tesseract.js</span>
                  <span className='px-2 py-1 text-xs bg-[#e99b63]/20 text-[#e99b63] rounded-full'>GPT-4</span>
                  <span className='px-2 py-1 text-xs bg-[#e99b63]/20 text-[#e99b63] rounded-full'>Three.js</span>
                </div>
              </div>
            </div>
            <div className='p-6'>
              <p className='text-sm text-gray-400 mb-4'>Jan 2025</p>
              <ul className='list-disc list-inside text-sm text-gray-400 space-y-2'>
                <li>Automated feedback generation using GPT-4 API on scanned assignments</li>
                <li>Built interactive 3D dashboard using Three.js</li>
                <li>Processed 1000+ documents with over 92% OCR accuracy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
