import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Tailwind CSS'],
      icon: 'bx-code-curly'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js'],
      icon: 'bx-server'
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'SQL'],
      icon: 'bx-data'
    },
    {
      title: 'Tools & Libraries',
      skills: ['Git', 'GitHub', 'Tesseract.js', 'Three.js', 'GPT-4', 'VS Code', 'Eclipse'],
      icon: 'bx-wrench'
    },
    {
      title: 'Programming Languages',
      skills: ['C/C++', 'JavaScript', 'Solidity'],
      icon: 'bx-code-alt'
    },
    {
      title: 'Languages & Interests',
      skills: ['English', 'Hindi', 'Marathi', 'Blockchain DApps', 'Scalable Full-Stack Solutions', 'AI Applications', 'UI/UX Animations'],
      icon: 'bx-globe'
    }
  ];

  return (
    <section id="skills" className='relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Title */}
        <h2 
          data-aos="fade-up"
          className='text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider mb-12'
        >
          SKILLS & EXPERTISE
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={100 + (index * 50)}
              className='bg-black/40 border border-gray-800 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]'
            >
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center'>
                  <i className={`bx ${category.icon} text-xl text-white`}></i>
                </div>
                <h3 className='text-lg font-medium text-white'>{category.title}</h3>
              </div>
              
              <div className='flex flex-wrap gap-2'>
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className='px-3 py-1.5 text-sm bg-white/5 text-gray-300 rounded-full border border-gray-700 transition-all duration-300 hover:border-gray-500 hover:bg-white/10'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
