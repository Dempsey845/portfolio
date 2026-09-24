const header = document.getElementById("header");

const isHomePage =
  window.location.pathname.endsWith("index.html") ||
  window.location.pathname.endsWith("/");

header.innerHTML = `
  <div class="left-section">
    <div id="main-nav-option" class="nav-option">
      <a href="index.html">Dempsey Newton</a>
    </div>
  </div>

  <div class="right-section">
    <div class="nav-option">
      <a href="index.html">HOME</a>
    </div>

    <div class="nav-option">
      <a href="${isHomePage ? "#about-me" : "index.html#about-me"}">ABOUT</a>
    </div>

    <div class="nav-option">
      <a href="games.html">GAMES</a>
    </div>
  </div>
`;
