document.addEventListener("DOMContentLoaded", function () {
  // Typing effect
  const typed = new Typed('.typed', {
    strings: [
      'Cloud Architecture Expert',
      'Data Engineering Specialist',
      'Full Stack Developer',
      'Problem Solver'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });

  // Smooth scrolling
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Header background change
  const header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("solid");
    } else {
      header.classList.remove("solid");
    }
  });

  // Project cards hover effect
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.classList.add('active');
    });
    item.addEventListener('mouseleave', function() {
      this.classList.remove('active');
    });
  });

  // Scroll reveal animations
  ScrollReveal().reveal('.project-item', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    interval: 100
  });
});
