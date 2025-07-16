'use strict'



  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });






let timeout;
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelector('.property-cards');

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                clearTimeout(timeout);
                serviceCards.classList.add('visible');
            } else {
                timeout = setTimeout(() => {
                    serviceCards.classList.remove('visible');
                }, 300); 
            }
        },
        { threshold: 0.2 }
    );

    observer.observe(serviceCards);
});