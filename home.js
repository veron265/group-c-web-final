// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle functionality
const toggleBtn = document.getElementById('mobileToggle');
const menu = document.getElementById('mobileMenu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('animate-slideDown');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnToggle = toggleBtn.contains(event.target);
  
  if (!isClickInsideMenu && !isClickOnToggle && !menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
    menu.classList.remove('animate-slideDown');
  }
});

// Initialize fade-up animations
function initializeAnimations() {
  const fadeElements = document.querySelectorAll('.fade-up');
  
  // Create Intersection Observer to trigger animations when elements come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add a small delay based on data-delay attribute or sequential delay
        const delay = entry.target.getAttribute('data-delay') || 
                     (Array.from(fadeElements).indexOf(entry.target) * 0.1);
        
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, delay * 1000);
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  fadeElements.forEach(el => observer.observe(el));
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAnimations);

// Optional: Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Optional: Add scroll effect to navbar
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('shadow-lg');
    nav.classList.remove('shadow-md');
  } else {
    nav.classList.remove('shadow-lg');
    nav.classList.add('shadow-md');
  }
});