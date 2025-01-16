// Add animations or interactive effects if needed.
window.onload = function() {
  // Example: Fade-in effect for sections on scroll
  const sections = document.querySelectorAll('.section-padding');
  window.onscroll = () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight) {
        section.classList.add('visible');
      }
    });
  };
};

// Add animation to sections when scrolled into view