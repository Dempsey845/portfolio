const footer = document.querySelector("footer");

footer.innerHTML = `
  <div class="footer-content">
    <div class="footer-about">
      <strong>Dempsey Newton</strong>
      <span>Game developer · Godot & GDScript</span>
    </div>

    <div class="footer-links">
      <a
        href="https://github.com/Dempsey845"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Dempsey Newton on GitHub (opens in a new tab)"
      >
        <i class="si si-github" aria-hidden="true"></i>
        GitHub
      </a>

      <a
        href="https://dempsey845.itch.io/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Dempsey Newton on itch.io (opens in a new tab)"
      >
        <i class="si si-itchdotio" aria-hidden="true"></i>
        itch.io
      </a>
    </div>

    <p class="footer-copyright">
      &copy; ${new Date().getFullYear()} Dempsey Newton
    </p>
  </div>
`;
