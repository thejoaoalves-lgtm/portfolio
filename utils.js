/* ============================================================
   PORTFOLIO — UTILS.JS
   Shared utilities used by both index and case study pages
   1. Scroll reveal
   2. Back to top button
   3. Mobile menu toggle
   4. Page fade in/out
   5. Social embed loader
   ============================================================ */

/* ── 1. SCROLL REVEAL ── */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── 2. BACK TO TOP ── */
function initBackToTop(btnId) {
  const btn = document.getElementById(btnId);
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── 3. MOBILE MENU ── */
function initMobileMenu(btnId, headerId) {
  const btn = document.getElementById(btnId);
  const header = document.getElementById(headerId);
  if (!btn || !header) return;
  let open = false;
  btn.addEventListener('click', () => {
    open = !open;
    header.classList.toggle('show', open);
    btn.textContent = open ? '[ CLOSE ]' : '[ MENU ]';
  });
}

/* ── 4. PAGE FADE ── */
function initPageFade() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.35s ease';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  }));
}

function fadeOut(url, delay = 340) {
  document.body.style.transition = 'opacity 0.3s ease';
  document.body.style.opacity = '0';
  setTimeout(() => { window.location.href = url; }, delay);
}

/* ── 5. SOCIAL EMBEDS ── */
function initSocialEmbeds() {
  if (document.querySelector('.instagram-media')) {
    const s = document.createElement('script');
    s.async = true;
    s.src = '//www.instagram.com/embed.js';
    document.body.appendChild(s);
  }
  if (document.querySelector('.tiktok-embed')) {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.tiktok.com/embed.js';
    document.body.appendChild(s);
  }
}
