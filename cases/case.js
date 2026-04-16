/* ============================================================
   PORTFOLIO — CASES/CASE.JS
   Case study pages — uses ../utils.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  initPageFade();
  initScrollReveal();
  initBackToTop('backToTop');
  initMobileMenu('caseMobileMenuBtn', 'caseSubHeader');
  initSocialEmbeds();

  /* ── BACK LINK FADE ── */
  const backLink = document.querySelector('.nav-back');
  if (backLink) {
    backLink.addEventListener('click', (e) => {
      e.preventDefault();
      fadeOut(backLink.getAttribute('href'));
    });
  }

  /* ── ALL CASE STUDIES BUTTON FADE ── */
  const navBackBtn = document.getElementById('nav_back_btn');
  if (navBackBtn) {
    navBackBtn.addEventListener('click', (e) => {
      e.preventDefault();
      fadeOut('../index.html#work');
    });
  }

  /* ── SMOOTH SCROLL FOR STICKY NAV ── */
  document.querySelectorAll('.case-sticky-nav a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(anchor.getAttribute('href').substring(1));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

});
