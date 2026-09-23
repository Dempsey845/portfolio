const latestGames = games.slice(0, 3);

const latestGamesContainer = document.querySelector(".latest-games-container");

latestGames.forEach((game) => {
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
