const header = document.getElementById("header");

const isProjectPage = window.location.pathname.split("/").includes("projects");

const prefix = isProjectPage ? "../" : "";

const isHomePage =
  window.location.pathname.endsWith("/index.html") ||
  window.location.pathname.endsWith("/");

header.innerHTML = `
  <div class="left-section">
    <div id="main-nav-option" class="nav-option">
      <a href="${prefix}index.html">Dempsey Newton</a>
    </div>
  </div>

  <div class="right-section">
    <div class="nav-option">
      <a href="${prefix}index.html">HOME</a>
    </div>

    <div class="nav-option">
      <a href="${isHomePage ? "#about-me" : `${prefix}index.html#about-me`}">ABOUT</a>
    </div>

    <div class="nav-option">
      <a href="${prefix}games.html">GAMES</a>
    </div>
  </div>
`;
