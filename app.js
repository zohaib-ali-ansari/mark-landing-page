document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navItems = document.querySelector('.nav-items');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navItems.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navItems.contains(e.target)) {
      hamburger.classList.remove('active');
      navItems.classList.remove('active');
    }
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navItems.classList.remove('active');
    });
  });
});