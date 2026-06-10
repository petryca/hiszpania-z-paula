// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const menuToggle = document.querySelector('.header__menu-toggle');
const nav = document.querySelector('.header__nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when a link is clicked
nav.querySelectorAll('.header__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Fade-in on scroll using IntersectionObserver
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
});

fadeElements.forEach(el => observer.observe(el));
