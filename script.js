// Esempio: Animazione semplice per far apparire le sezioni al scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.getBoundingClientRect().height;

            if(window.scrollY >= (sectionTop + window.scrollY - sectionHeight / 2)) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', revealSection);
});
