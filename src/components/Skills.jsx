import 'boxicons/css/boxicons.min.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: ['React.js', , 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap5', 'Vite'],
      icon: 'bx-code-curly'
    },
    {
      title: 'Backend & Services',
      skills: ['Node.js', 'Express.js', 'Firebase', 'CLI Development', 'NPM Package Development','supabase','firebase'],
      icon: 'bx-server'
    },
    {
      title: 'Database & Storage',
      skills: ['MongoDB', 'SQL', 'Ethereum Blockchain', 'Firebase Database'],
      icon: 'bx-data'
    },
    {
      title: 'Blockchain & Web3',
      skills: ['Solidity', 'Hardhat', 'Ethereum', 'Smart Contracts', 'MetaMask Integration'],
      icon: 'bx-bitcoin'
    },
    {
      title: 'AI & Machine Learning',
      skills: ['GPT-4 API', 'Tesseract.js', 'OCR Processing', 'AI Integration', 'Document Processing'],
      icon: 'bx-brain'
    },
    {
      title: '3D & Animation',
      skills: ['Three.js', 'GSAP', 'ScrollTrigger', '3D Dashboards', 'Interactive Animations'],
      icon: 'bx-cube-alt'
    },
    {
      title: 'Developer Tools',
      skills: ['PyCharm', 'VS Code Extensions', 'Git', 'GitHub', 'NPM', 'CLI Tools'],
      icon: 'bx-wrench'
    },
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'python', 'Solidity', 'C/C++', 'HTML/CSS'],
      icon: 'bx-code-alt'
    },
    {
      title: 'Specializations',
      skills: ['Full-Stack Development', 'Blockchain Basics', 'AI Integration', 'Extension Development basics', 'Scalable Architecture'],
      icon: 'bx-trophy'
    },
    {
      title: 'Languages & Soft Skills',
      skills: ['English', 'Hindi', 'Marathi','Japanase (10 words)', 'Project Management', 'Problem Solving', 'Team Collaboration'],
      icon: 'bx-globe'
    }
  ];

  return (
    <section id="skills" className='relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>        {/* Section Title */}
        <div className='text-center mb-12'>
          <h2 
            data-aos="fade-up"
            className='text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider mb-4'
          >
            SKILLS & EXPERTISE
          </h2>
          <p 
            data-aos="fade-up" 
            data-aos-delay="100"
            className='text-gray-400 max-w-2xl mx-auto'
          >
            A comprehensive skill set spanning modern web development, blockchain technology, AI integration, and cutting-edge animations.
          </p>
        </div>

        {/* Skills Summary */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="200"
          className='mb-12 bg-gradient-to-r from-[#e99b63]/10 to-transparent p-6 rounded-xl border border-gray-800'
        >
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 text-center'>
            <div>
              <div className='text-2xl font-bold text-[#e99b63] mb-1'>20+</div>
              <div className='text-sm text-gray-400'>Technologies</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-[#e99b63] mb-1'>6+</div>
              <div className='text-sm text-gray-400'>Major Projects</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-[#e99b63] mb-1'>1+</div>
              <div className='text-sm text-gray-400'>Years Experience</div>
            </div>
            <div>
              <div className='text-2xl font-bold text-[#e99b63] mb-1'>100+</div>
              <div className='text-sm text-gray-400'>CLI Downloads</div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8'>
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={300 + (index * 50)}
              className='bg-black/40 border border-gray-800 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_15px_rgba(233,155,99,0.2)] group'
            >
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] flex items-center justify-center transition-transform group-hover:scale-110'>
                  <i className={`bx ${category.icon} text-xl text-white`}></i>
                </div>
                <h3 className='text-lg font-medium text-white group-hover:text-[#e99b63] transition-colors'>{category.title}</h3>
              </div>
              
              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill}
                    className='px-3 py-1.5 text-sm bg-white/5 text-gray-300 rounded-full border border-gray-700 transition-all duration-300 hover:border-[#e99b63] hover:bg-[#e99b63]/10 hover:text-white cursor-default'
                    style={{
                      animationDelay: `${skillIndex * 100}ms`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Skill count badge */}
              <div className='mt-4 flex justify-between items-center'>
                <span className='text-xs text-gray-500'>
                  {category.skills.length} skills
                </span>
                <div className='w-2 h-2 rounded-full bg-[#e99b63] opacity-50 group-hover:opacity-100 transition-opacity'></div>
              </div>
            </div>
          ))}        </div>
      </div>
    </section>
  );
};

export default Skills;
