// Typed.js animation
const typed = new Typed('.text', {
  strings: ['Geomatic Engineer', 'Frontend Developer', 'Web Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Animate skill bars on load
function animateSkillBars() {
  document.querySelectorAll('.progress-line').forEach(function(line) {
    const span = line.querySelector('span');
    const percent = span.getAttribute('data-percent');
    span.style.width = percent;
  });
}
window.addEventListener('DOMContentLoaded', animateSkillBars);

// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    }
  });
});
