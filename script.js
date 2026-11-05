// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic copyright year
document.querySelector('footer p').innerHTML =
    `© ${new Date().getFullYear()} Monika Yadav | Python Developer`;

console.log("Monika's Portfolio Loaded Successfully!");