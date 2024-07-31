window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var heroSection = document.getElementById('home');
    
    if (window.scrollY > heroSection.offsetHeight) {
      navbar.style.background = 'white';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.5)'; // Semi-transparent white
    }
    
    // Check if the top of the hero section is in view
    var heroRect = heroSection.getBoundingClientRect();
    if (heroRect.top >= 0 && heroRect.bottom <= window.innerHeight) {
      navbar.style.background = 'transparent';
    }
  });
  