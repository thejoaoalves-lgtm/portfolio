/* ═══════════════════════════════════════════════
   PORTFOLIO — CASES/CASE.JS
   Shared JS for all case study pages
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── SCROLL REVEAL ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ── PAGE ENTER FADE ── */
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.35s ease';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  });

  /* ── BACK LINK FADE OUT ── */
  const backLink = document.querySelector('.nav-back');
  if (backLink) {
    backLink.addEventListener('click', (e) => {
      e.preventDefault();
      const url = backLink.getAttribute('href');
      document.body.style.opacity = '0';
      setTimeout(() => { window.location.href = url; }, 360);
    });
  }

  /* ── SOCIAL EMBED LOADERS ── */
  if (document.querySelector('.instagram-media')) {
    const igScript = document.createElement('script');
    igScript.async = true;
    igScript.src = '//www.instagram.com/embed.js';
    document.body.appendChild(igScript);
  }

  if (document.querySelector('.tiktok-embed')) {
    const ttScript = document.createElement('script');
    ttScript.async = true;
    ttScript.src = 'https://www.tiktok.com/embed.js';
    document.body.appendChild(ttScript);
  }

});
