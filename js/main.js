// ── ACTIVE NAV STATE ──
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-inner a');
  const normalize = (path) => path.replace(/\/$/, '') || '/';
  const current = normalize(window.location.pathname);
  links.forEach(link => {
    const href = normalize(link.getAttribute('href'));
    if (href === current) {
      link.classList.add('active');
    }
  });

  // ── SCROLL REVEAL ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .review-card, .item-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // ── FILTER BUTTONS ──
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.filter-bar');
      group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const cards = document.querySelectorAll('[data-category]');
      cards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
      });
    });
  });
});
