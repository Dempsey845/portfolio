const jamGames = games.filter((game) => {
  return game.devType === "jam";
});

const jamGamesContainer = document.getElementById("jam-games-container");

jamGames.forEach((game) => {
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
      <div class="game-dev-details">
        <p class="secondary-text">${game.engine}</p>
        <p>&middot;</p>
        <p class="secondary-text">${game.language}</p>
      </div>
      <img src="${game.image}" alt="${game.imageAlt}">
    </div>
  `;

  jamGamesContainer.appendChild(gameLink);
});

const wipGames = games.filter((game) => {
  return game.devType === "wip";
});

const wipGamesContainer = document.getElementById("wip-games-container");

wipGames.forEach((game) => {
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
      <div class="game-dev-details">
        <p class="secondary-text">${game.engine}</p>
        <p>&middot;</p>
        <p class="secondary-text">${game.language}</p>
      </div>
      <img src="${game.image}" alt="${game.imageAlt}">
    </div>
  `;

  wipGamesContainer.appendChild(gameLink);
});
