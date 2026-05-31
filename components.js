// Shared masthead + nav + footer injected by components.js
(function () {
  const masthead = `
  <header class="masthead">
    <div class="masthead-inner">
      <span class="masthead-ornament">Est. 2026 &nbsp;·&nbsp; Manchester</span>
      <h1 class="masthead-title"><a href="index.html" style="text-decoration:none;color:inherit;">Tj's Miscellany</a></h1>
      <p class="masthead-subtitle">Endless distractions and procrastinations</p>
    </div>
  </header>
  <nav class="main-nav">
    <div class="nav-inner">
      <a href="/index.html">Home</a>
      <span class="nav-sep">✦</span>
      <a href="/about.html">About</a>
      <span class="nav-sep">✦</span>
      <a href="/Journal.html">Journal</a>
      <span class="nav-sep">✦</span>
      <a href="/Books.html">Books</a>
      <span class="nav-sep">✦</span>
      <a href="/Art.html">Art</a>
      <span class="nav-sep">✦</span>
      <a href="/items.html">The Emporium</a>
    </div>
  </nav>`;

  const footer = `
  <footer>
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="masthead-title" style="font-size:1.4rem;margin-bottom:0.5rem;">Tj's Miscellany</div>
        <p class="footer-tagline">A Cabinet of Curious Enthusiasms</p>
        <p class="footer-copy">An independent online magazine devoted to literature, the visual arts, and the curiosities of life.</p>
      </div>
      <div class="footer-col">
        <h4>Navigate</h4>
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/about.html">About Tj</a></li>
          <li><a href="/Journal.html">Journal</a></li>
          <li><a href="/Books.html">Books</a></li>
          <li><a href="/Art.html">Art</a></li>
          <li><a href="/items.html">The Emporium</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <ul>
          <li><a href="#">Newsletter</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Goodreads</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2024 Tj's Miscellany &nbsp;·&nbsp; All rights reserved &nbsp;·&nbsp; Made with intention
    </div>
  </footer>`;

  // Inject header and footer
  document.getElementById('site-header').innerHTML = masthead;
  document.getElementById('site-footer').innerHTML = footer;

  // Highlight active nav link
  const links = document.querySelectorAll('.nav-inner a');
  const current = window.location.pathname;
  links.forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });

})();