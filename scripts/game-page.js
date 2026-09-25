const gamePage = document.getElementById("game-page");
const gameId = gamePage.dataset.game;
const game = gameData[gameId];

if (!game) {
  gamePage.textContent = "This game could not be found.";
} else {
  renderGamePage(gamePage, game);
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;

  return element;
}

function createButton(url, label) {
  const button = createElement("a", "game-page-button", `${label} ↗`);
  button.href = url;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  return button;
}

function renderGamePage(container, game) {
  // Hero
  const hero = createElement("section", "game-page-hero");
  hero.style.setProperty("--game-banner", `url("${game.banner}")`);

  const heroContent = createElement("div", "game-page-hero-content");
  heroContent.append(
    createElement("p", "game-page-eyebrow", game.category),
    createElement("h1", "", game.title),
    createElement("p", "game-page-intro", game.intro),
  );

  if (game.itchUrl) {
    heroContent.append(createButton(game.itchUrl, "View on itch.io"));
  }

  hero.append(heroContent);
  container.append(hero);

  // Content sections
  const content = createElement("div", "game-page-content");

  game.sections.forEach((sectionData, index) => {
    const section = createElement("section", "game-page-section");
    const heading = createElement("h2", "", sectionData.title);
    const headingId = `game-section-${index + 1}`;

    heading.id = headingId;
    section.setAttribute("aria-labelledby", headingId);

    const number = String(index + 1).padStart(2, "0");

    section.append(
      createElement(
        "p",
        "game-page-eyebrow",
        `${number} / ${sectionData.label}`,
      ),
      heading,
    );

    if (sectionData.text) {
      section.append(createElement("p", "", sectionData.text));
    }

    if (sectionData.showFacts && game.facts?.length) {
      const facts = createElement("div", "game-page-facts");

      game.facts.forEach((fact) => {
        const item = createElement("div");
        item.append(
          createElement("span", "game-page-fact-label", fact.label),
          createElement("strong", "", fact.value),
        );
        facts.append(item);
      });

      section.append(facts);
    }

    if (sectionData.cards?.length) {
      const grid = createElement("div", "game-page-grid");

      if (sectionData.columns === 2) {
        grid.classList.add("game-page-grid--two-columns");
      }

      sectionData.cards.forEach((cardData) => {
        const card = createElement("article", "game-page-card");
        card.append(
          createElement("h3", "", cardData.title),
          createElement("p", "", cardData.text),
        );
        grid.append(card);
      });

      section.append(grid);
    }

    content.append(section);
  });

  // Show the closing link only when this game has an itch.io URL.
  if (game.itchUrl) {
    const cta = createElement("section", "game-page-cta");
    const ctaText = createElement("div");

    ctaText.append(
      createElement("p", "game-page-eyebrow", "Explore the project"),
      createElement("h2", "", `See ${game.title} on itch.io`),
    );

    cta.append(ctaText, createButton(game.itchUrl, "View game page"));
    content.append(cta);
  }

  container.append(content);
}
