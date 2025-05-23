// Scroll offset function to account for fixed header
function handleSmoothScroll() {
  // Get all links with hash
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  // Header height plus some padding
  const headerOffset = 80;
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return; // Skip if it's just "#"
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return; // Skip if target doesn't exist
      
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', handleSmoothScroll);

export default handleSmoothScroll;
