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

// 2. SOCIAL MEDIA EMBED LOADERS
// This dynamically loads the Instagram and TikTok SDKs only when needed
function initSocialEmbeds() {
    // Instagram
    if (document.querySelector('.instagram-media')) {
        const igScript = document.createElement('script');
        igScript.async = true;
        igScript.src = "//www.instagram.com/embed.js";
        document.body.appendChild(igScript);
    }

    // TikTok
    if (document.querySelector('.tiktok-embed')) {
        const ttScript = document.createElement('script');
        ttScript.async = true;
        ttScript.src = "https://www.tiktok.com/embed.js";
        document.body.appendChild(ttScript);
