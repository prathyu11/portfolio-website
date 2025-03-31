document.addEventListener("DOMContentLoaded", function () {
  // Typing effect (only on home page)
  if (document.querySelector('.typed')) {
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
  }

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

  // Initialize particles (only on home page)
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#6366f1"
          },
          "shape": {
            "type": "circle"
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#818cf8",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": true,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "push": {
              "particles_nb": 4
            }
          }
        },
        "retina_detect": true
      }
    );
  }

  // Animate skill bars (only on skills page)
  if (document.querySelector('.skill-bars')) {
    const animateSkillBars = () => {
      const skillBars = document.querySelectorAll('.progress-fill');
      skillBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = targetWidth;
        }, 200);
      });
    }

    // Run animation when page loads
    animateSkillBars();
  }

  // Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };

      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      // Reset form
      contactForm.reset();
      
      // Show success message (you can customize this)
      alert('Thank you for your message! I will get back to you soon.');
    });
  }

  // Project hover effects
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.classList.add('active');
    });
    item.addEventListener('mouseleave', function() {
      this.classList.remove('active');
    });
  });

  // ScrollReveal for projects
  if (document.querySelector('.project-item')) {
    ScrollReveal().reveal('.project-item', {
      delay: 200,
      distance: '20px',
      origin: 'bottom',
      interval: 100
    });
  }

  // Add smooth reveal animations
  ScrollReveal().reveal('.project-item', {
    distance: '50px',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 150,
    origin: 'bottom',
    opacity: 0,
    scale: 0.9
  });

  // Add floating animation to skill pills
  const skillPills = document.querySelectorAll('.skill-pill');
  skillPills.forEach((pill, index) => {
    pill.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
  });

  // Add this CSS animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
  `;
  document.head.appendChild(style);

  // Navigation dots functionality
  const navDots = document.querySelectorAll('.nav-dot');
  const sections = document.querySelectorAll('.page-section');

  // Update active dot based on scroll position
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 300) {
        current = section.getAttribute('id');
      }
    });

    navDots.forEach(dot => {
      dot.classList.remove('active');
      if (dot.getAttribute('data-label').toLowerCase() === current) {
        dot.classList.add('active');
      }
    });
  });

  // Animated background
  const canvas = document.createElement('canvas');
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  document.querySelector('.bg-animation').appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  let particles = [];

  function createParticles() {
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1
      });
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = '#ff3366';
      ctx.fill();
    });
    requestAnimationFrame(animateParticles);
  }

  // Initialize animation
  createParticles();
  animateParticles();
});
