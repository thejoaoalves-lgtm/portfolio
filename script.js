document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Observer
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Page Transition Effect
    document.querySelectorAll('.case-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const target = card.getAttribute('onclick').match(/'([^']+)'/)[1];
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s';
            setTimeout(() => { window.location.href = target; }, 500);
        });
    });
});
