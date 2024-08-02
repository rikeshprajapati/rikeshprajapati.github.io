document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('#nav-toggle');
    const navMenu = document.querySelector('#nav-menu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });

    // Back to top button
    const backToTopButton = document.querySelector('footer a[href="#about"]');

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
