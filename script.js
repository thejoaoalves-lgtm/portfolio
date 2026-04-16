/* ============================================================
   PORTFOLIO — SCRIPT.JS
   Index page — uses utils.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  initPageFade();
  initScrollReveal();
  initBackToTop('backToTop');
  initMobileMenu('mobileMenuBtn', 'subHeader');
  initSocialEmbeds();

  /* ── CASE CARD FADE-OUT NAV ── */
  document.querySelectorAll('a.case-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const href = card.getAttribute('href');
      if (!href || href.startsWith('#')) return;
      e.preventDefault();
      fadeOut(href);
    });
  });

});
