document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Handle smooth transition to case studies
    document.querySelectorAll('.case-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const url = card.getAttribute('onclick').match(/'([^']+)'/)[1];
            document.body.style.opacity = '0';
            document.body.style.transition = '0.4s';
            setTimeout(() => { window.location.href = url; }, 400);
        });
    });
});
