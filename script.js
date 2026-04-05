/* ============================================================
   PORTFOLIO — SCRIPT.JS
   1. Scroll reveal
   2. Page transition on case card click
   3. Social embed loader (Instagram + TikTok)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. SCROLL REVEAL ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  /* ── 2. PAGE TRANSITION ── */
  // Fade out body before navigating to a case study page
  document.querySelectorAll('a.case-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const href = card.getAttribute('href');
      if (!href || href.startsWith('#')) return;
      e.preventDefault();
      document.body.style.transition = 'opacity 0.3s ease';
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });

  // Fade in on page load (for case study pages navigating back)
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  });


  /* ── 3. SOCIAL EMBED LOADER ── */
  // Lazily inject platform SDKs only if embeds exist on the page

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
// ============================================
// BOTÃO VOLTAR AO TOPO
// ============================================
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
