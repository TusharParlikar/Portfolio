import React, { useState, useMemo } from 'react';
import 'boxicons/css/boxicons.min.css';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');

  // Projects data with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Job Portal',
      description: 'A full-featured job listing and application platform for recruiters and job seekers.',
      category: 'Full Stack',
      technologies: ['React', 'Tailwind', 'Bootstrap', 'firebase'],
      liveUrl: 'https://jobportal-b6097.web.app/',
      githubUrl: 'https://github.com/TusharParlikar/JobPortal.git',
      date: 'Dec 2024',
      gradient: 'from-blue-900 to-purple-900',
      features: [
        'Full-featured job posting and application system',
        'Recruiter and job seeker dashboards',
        'Real-time notifications and messaging',
        'Advanced search and filtering capabilities'
      ]
    },
    {
      id: 2,
      title: 'SmartBookmark VS Code Extension',
      description: 'Bookmark and organize code in VS Code like never before.',
      category: 'Extension',
      technologies: ['TypeScript', 'VS Code API', 'Node.js'],
      liveUrl: 'https://marketplace.visualstudio.com/items?itemName=TusharParlikar.smart-bookmarks',
      githubUrl: 'https://github.com/TusharParlikar/SMART-BOOKMARKS',
      date: 'Nov 2024',
      gradient: 'from-green-900 to-teal-900',
      features: [
        'Smart code bookmarking system',
        'Advanced search and organization',
        'Workspace-based bookmark management',
        'Export/import bookmark collections'
      ]
    },
    {
      id: 3,
      title: 'Toolkit React CLI',
      description: 'A lightweight CLI tool to scaffold production-ready React + Tailwind projects with Vite.',
      category: 'CLI Tool',
      technologies: ['Node.js', 'CLI', 'React', 'Vite', 'Tailwind'],
      liveUrl: 'https://www.npmjs.com/package/toolkit-react-cli',
      githubUrl: 'https://github.com/TusharParlikar/React-toolkit',
      date: 'Oct 2024',
      gradient: 'from-orange-900 to-red-900',
      features: [
        'One-command React project scaffolding',
        'Pre-configured Vite + Tailwind setup',
        'Production-ready boilerplate',
        'Multiple template options'
      ]
    },
    {
      id: 4,
      title: 'RentAchord',
      description: 'Developed a musical instrument rental platform with enhanced user engagement.',
      category: 'Full Stack',
      technologies: ['React', 'TailwindCSS', 'GSAP', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      date: 'Apr 2025',
      gradient: 'from-gray-800 to-gray-900',
      features: [
        '30% increased user engagement',
        'GSAP animations reducing bounce rate by 25%',
        'Responsive UI design',
        'Scalable MongoDB schema for 500+ listings'
      ]
    },
    {
      id: 5,
      title: 'Blockchain Medical System',
      description: 'Engineered a DApp for storing medical records on Ethereum blockchain.',
      category: 'Blockchain',
      technologies: ['React', 'Solidity', 'Hardhat', 'Ethereum'],
      liveUrl: '#',
      githubUrl: '#',
      date: 'Mar 2025',
      gradient: 'from-purple-900 to-indigo-900',
      features: [
        'Secure medical record storage on Ethereum',
        'Role-based access via smart contracts',
        'MetaMask authentication integration',
        '60% improved response time with decentralized architecture'
      ]
    },
    {
      id: 6,
      title: 'Assignment Feedback System',
      description: 'Automated feedback generation using AI for scanned assignments.',
      category: 'AI/ML',
      technologies: ['Tesseract.js', 'GPT-4', 'Three.js', 'OCR'],
      liveUrl: '#',
      githubUrl: '#',
      date: 'Jan 2025',
      gradient: 'from-emerald-900 to-cyan-900',
      features: [
        'Automated feedback using GPT-4 API',
        'Interactive 3D dashboard with Three.js',
        '1000+ documents processed',
        '92% OCR accuracy rate'
      ]
    }
  ];

  // Get unique categories and technologies
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const technologies = ['All', ...new Set(projects.flatMap(project => project.technologies))];

  // Filter projects based on search and filters
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesTech = selectedTech === 'All' || project.technologies.includes(selectedTech);
      
      return matchesSearch && matchesCategory && matchesTech;
    });
  }, [searchTerm, selectedCategory, selectedTech]);

  return (
    <section id="projects" className='relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-black/20'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Title */}
        <div className='text-center mb-12'>
          <h2 
            data-aos="fade-up"
            className='text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider mb-4'
          >
            FEATURED PROJECTS
          </h2>
          <p 
            data-aos="fade-up" 
            data-aos-delay="100"
            className='text-gray-400 max-w-2xl mx-auto'
          >
            A collection of projects showcasing my expertise in full-stack development, blockchain, AI/ML, and developer tools.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="200"
          className='mb-12 space-y-4'
        >
          {/* Search Bar */}
          <div className='relative max-w-md mx-auto'>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full px-4 py-3 pl-12 bg-black/40 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#e99b63] transition-colors'
            />
            <i className='bx bx-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl'></i>
          </div>

          {/* Filter Buttons */}
          <div className='flex flex-wrap justify-center gap-4'>
            {/* Category Filter */}
            <div className='flex flex-wrap gap-2'>
              <span className='text-sm text-gray-400 px-3 py-2'>Category:</span>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category 
                      ? 'bg-[#e99b63] text-black' 
                      : 'bg-black/40 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Technology Filter */}
          <div className='flex flex-wrap justify-center gap-2'>
            <span className='text-sm text-gray-400 px-3 py-2'>Tech:</span>
            {technologies.slice(0, 8).map(tech => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-3 py-1 rounded-full text-xs transition-all ${
                  selectedTech === tech 
                    ? 'bg-[#e99b63]/20 text-[#e99b63] border border-[#e99b63]/40' 
                    : 'bg-black/40 text-gray-500 hover:text-gray-300 border border-gray-800'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Count */}
        <div className='text-center mb-8'>
          <p className='text-gray-400'>
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className='bg-black/40 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-600 hover:transform hover:scale-105 group'
            >
              <div className={`h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60'>
                  <div className='flex gap-4'>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all group'
                    >
                      <i className='bx bx-link text-xl group-hover:scale-110 transition-transform'></i>
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all group'
                    >
                      <i className='bx bxl-github text-xl group-hover:scale-110 transition-transform'></i>
                    </a>
                  </div>
                </div>
                <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
                  <h3 className='text-lg font-medium mb-2'>{project.title}</h3>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className='px-2 py-1 text-xs bg-[#e99b63]/20 text-[#e99b63] rounded-full'>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className='px-2 py-1 text-xs bg-gray-600/20 text-gray-400 rounded-full'>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className='p-6'>
                <div className='flex justify-between items-center mb-3'>
                  <p className='text-sm text-gray-400'>{project.date}</p>
                  <span className='px-2 py-1 text-xs bg-[#e99b63]/10 text-[#e99b63] rounded-full'>
                    {project.category}
                  </span>
                </div>
                <p className='text-sm text-gray-300 mb-4 leading-relaxed'>
                  {project.description}
                </p>
                <ul className='list-disc list-inside text-sm text-gray-400 space-y-1'>
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className='text-center py-12'>
            <i className='bx bx-search-alt-2 text-6xl text-gray-600 mb-4'></i>
            <h3 className='text-xl font-medium text-gray-400 mb-2'>No projects found</h3>
            <p className='text-gray-500'>Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedTech('All');
              }}
              className='mt-4 px-6 py-2 bg-[#e99b63] text-black rounded-lg hover:bg-[#e99b63]/90 transition-colors'
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
