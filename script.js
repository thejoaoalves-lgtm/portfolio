/* ============================================================
   PORTFOLIO — SCRIPT.JS
   1. Scroll reveal
   2. Page transition on case card click
   3. Social embed loader (Instagram + TikTok)
   4. Back to top button
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

  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  });


  /* ── 3. SOCIAL EMBED LOADER ── */
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

  /* ── 4. BACK TO TOP BUTTON ── */
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
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
});
/* ── SUB-HEADER MOBILE ── */
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const subHeader = document.getElementById('subHeader');

if (mobileMenuBtn && subHeader) {
  let subHeaderVisible = false;

  mobileMenuBtn.addEventListener('click', () => {
    subHeaderVisible = !subHeaderVisible;
    if (subHeaderVisible) {
      subHeader.classList.add('show');
      mobileMenuBtn.textContent = '[ CLOSE ]';
    } else {
      subHeader.classList.remove('show');
      mobileMenuBtn.textContent = '[ MENU ]';
    }
  });

  // Fecha o sub-header ao clicar num link
  document.querySelectorAll('.nav-links-mobile a').forEach(link => {
    link.addEventListener('click', () => {
      subHeader.classList.remove('show');
      subHeaderVisible = false;
      mobileMenuBtn.textContent = '[ MENU ]';
    });
  });
}
