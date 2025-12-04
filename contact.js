
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-BCCRYD6VDX');


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('year').textContent = new Date().getFullYear();
  
  const toggleBtn = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  
  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      menu.classList.toggle('animate-slideDown');
    });
  }
  

  const contactForm = document.getElementById('contactForm');
  const sentMsg = document.getElementById('sentMsg');
  
  if (contactForm && sentMsg) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
    
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
    
      console.log('Form submitted:', { name, email, message });
      
    
      sentMsg.classList.remove('hidden');
      
      
      setTimeout(() => {
        contactForm.reset();
        sentMsg.classList.add('hidden');
      }, 3000);
    });
  }
});