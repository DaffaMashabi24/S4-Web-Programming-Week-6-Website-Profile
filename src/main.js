import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      // Update icon if needed (handled by lucide if we swap, but here we just toggle visibility)
    });

    // Close menu when clicking a link
    const links = mobileMenu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Intersection Observer for Reveal Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add reveal class to sections
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
    revealObserver.observe(section);
  });

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar.querySelector('.glass')?.classList.add('shadow-2xl', 'py-1', 'border-white/20');
      } else {
        navbar.querySelector('.glass')?.classList.remove('shadow-2xl', 'py-1', 'border-white/20');
      }
    });
  }

  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  console.log('Premium Portfolio initialized: Daffa Mashabi');
});

