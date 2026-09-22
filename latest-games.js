const games = [
  {
    title: "Trust // Protocol",
    description:
      "A 3D arena shooter created in five days, focusing on improved UI, controller support and more advanced AI systems.",
    date: "Sep 2026",
    image: "images/trust-protocol-logo.png",
    imageAlt: "Trust Protocol logo",
    page: "projects/trust-protocol.html",
  },
  {
    title: "Supermarket Scramble",
    description:
      "A 3D game-show party game focused on AI contestants, round systems, item interactions and character movement.",
    date: "Aug 2026",
    image: "images/supermarket-scramble-logo.png",
    imageAlt: "Supermarket Scramble logo",
    page: "projects/supermarket-scramble.html",
  },
  {
    title: "Roulette Time",
    description:
      "A PSX-style Wild West shooter focused on escalating enemy waves, revolver mechanics and a roulette system that changes each bullet’s effects.",
    date: "Sep 2026",
    image: "images/roulette-time-logo.png",
    imageAlt: "Roulette Time logo",
    page: "projects/roulette-time.html",
  },
  ,
];

const latestGamesContainer = document.querySelector(".latest-games-container");

games.forEach((game) => {
  const gameLink = document.createElement("a");

  gameLink.classList.add("game-preview");
  gameLink.href = game.page;

  gameLink.innerHTML = `
    <div class="game-preview-top">
      <h2>${game.title}</h2>
      <p class="secondary-text">${game.description}</p>
    </div>

    <hr>

    <div class="game-preview-bottom">
      <p class="secondary-text">${game.date}</p>
      <img src="${game.image}" alt="${game.imageAlt}">
    </div>
  `;

  latestGamesContainer.appendChild(gameLink);
});
