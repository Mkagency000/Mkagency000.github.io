
    document.addEventListener("DOMContentLoaded", () => {
      const sections = document.querySelectorAll(".section");
      const menuIcon = document.getElementById("menu-icon");
      const navMenu = document.getElementById("nav-menu");
      const navLinks = document.querySelectorAll("#nav-menu a");
      
      let menuOpen = false;
    
      //  Le truc d'Animation 
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, { threshold: 0.1 });
    
      sections.forEach(section => observer.observe(section));
    
      // le Menu toggle
      menuIcon.addEventListener("click", () => {
        menuOpen = !menuOpen;
        navMenu.classList.toggle("show");
        menuIcon.innerHTML = menuOpen ? "&#10005;" : "&#9776;";
      });
    
      // Fermer le menu quand on clique sur un lien
      navLinks.forEach(link => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("show");
          menuIcon.innerHTML = "&#9776;";
          menuOpen = false;
        });
      });
    });