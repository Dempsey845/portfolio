const gameData = {
  "pip-the-courier": {
    title: "Pip the Courier",
    category: "Game development project",
    intro:
      "A 3D adventure about a small courier delivering parcels across a world of ruins, swamps and enchanted woodland. Each delivery takes Pip somewhere new, introducing characters, enemies and challenges along the way.",

    banner: "../images/pip-the-courier-banner.png",

    itchUrl: "",

    facts: [
      { label: "Engine", value: "Godot" },
      { label: "My role", value: "Programming, design and 3D art" },
      { label: "Genre", value: "3D adventure" },
    ],

    sections: [
      {
        label: "Overview",
        title: "The project",
        text: "Pip begins at a postal hut and travels through several connected areas to complete deliveries. I’m using the courier premise to give players a reason to explore: parcels lead them to new characters, while the problems those characters face create goals beyond simply reaching a destination.",
        showFacts: true,
      },
      {
        label: "World design",
        title: "A journey through different areas",
        text: "Each area has its own characters, visual identity and gameplay purpose. I want the world to feel like a series of places Pip is delivering to, with stories that connect one destination to the next.",
        columns: 2,
        cards: [
          {
            title: "The postal hut",
            text: "Pip’s starting point and the place that establishes their role as a courier before the journey begins.",
          },
          {
            title: "The ruins",
            text: "Home to water and fire wisps. The fire wisp who keeps the lanterns lit has been kidnapped and trapped in the golem’s dungeon, giving Pip a reason to investigate the ruins.",
          },
          {
            title: "The swamp and frog realm",
            text: "Puffcap enemies inhabit the swamp, and their mushrooms are needed to enter the frog realm. There, Pip encounters a frog boss whose younger sibling is also waiting for a parcel.",
          },
          {
            title: "The enchanted forest",
            text: "The forest baker needs baking supplies delivered. Pip must also face the forest guardian: a tree boss inspired by Whispy Woods from Kirby 64.",
          },
        ],
      },
      {
        label: "Development",
        title: "What I’m building",
        cards: [
          {
            title: "Deliveries with a purpose",
            text: "I’m designing deliveries around the people who receive them. The parcels introduce characters and give context to the challenges Pip discovers in each area.",
          },
          {
            title: "Distinct areas and enemies",
            text: "The ruins, swamp, frog realm and forest each need their own atmosphere and obstacles. I’m working on making those differences clear through environment art and gameplay.",
          },
          {
            title: "Boss encounters",
            text: "Encounters such as the frog boss and forest guardian give me a chance to design readable attack patterns, player feedback and memorable endings to parts of Pip’s journey.",
          },
        ],
      },
      {
        label: "Reflection",
        title: "What I’m learning",
        text: "Pip the Courier is helping me practise designing a larger game where story, level layout and mechanics support each other. As I develop the different areas, I’m learning how to guide players towards their next objective while making each destination feel rewarding to explore.",
      },
    ],
  },
  "supermarket-scramble": {
    title: "Supermarket Scramble",
    category: "Untitled Game Jam #131 · Completed",
    intro:
      "A chaotic 3D supermarket game show where contestants race to find hidden items, steal them from each other and score enough points to reach the podium.",

    banner: "../images/supermarket-scramble-banner.png",
    itchUrl: "https://dempsey845.itch.io/supermarket-scramble",

    colors: {
      accent: "#f9cf72",
      hover: "#ffe3a5",
      buttonText: "#252017",
    },

    facts: [
      { label: "Engine", value: "Godot" },
      { label: "Project", value: "Untitled Game Jam #131" },
      { label: "Status", value: "Released" },
      { label: "Platforms", value: "Windows and browser" },
      { label: "My role", value: "Programming, 3D art and game design" },
    ],

    sections: [
      {
        label: "The game",
        title: "A supermarket game show",
        text: "Players control a bean competing against other contestants in a supermarket-themed game show. Each round announces an item to find. Contestants can pick it up, throw it or slide tackle whoever is carrying it. Holding the item when the round ends earns points, and the highest-scoring contestants reach the podium.",
        showFacts: true,
      },
      {
        label: "Game design",
        title: "Making every round unpredictable",
        text: "The core idea is simple: find the item and keep hold of it. I built the rounds around the tension of carrying something everyone else wants, with tackling and throwing creating opportunities for last-second changes.",
        cards: [
          {
            title: "Item objectives",
            text: "Announcements tell players which item to look for, giving each round an immediate objective.",
          },
          {
            title: "Stealing and scoring",
            text: "Slide tackles let contestants steal the item. The scoring rules also reward some last-second steals and situations where nobody holds the item at the end.",
          },
          {
            title: "Special rounds",
            text: "Rounds such as hot potato change the usual rules and push players to adapt instead of repeating the same strategy.",
          },
        ],
      },
      {
        label: "Art and presentation",
        title: "Building the supermarket",
        text: "I used this jam to spend more time on the visual design stage. I created most of the game's assets myself and worked on the 3D models, materials and presentation needed to make the supermarket and its contestants feel like part of the same game.",
        cards: [
          {
            title: "3D modelling",
            text: "I modelled assets for the characters, items and supermarket, practising how to create a consistent style across a full playable scene.",
          },
          {
            title: "Shaders and materials",
            text: "I experimented with shaders and materials to give objects a clearer identity and make the environment more visually interesting.",
          },
          {
            title: "Particle effects",
            text: "I used particle effects to add energy and feedback to moments such as item interactions and special rounds.",
          },
        ],
      },
      {
        label: "Technical work",
        title: "AI, lighting and gameplay systems",
        text: "Alongside the art, I worked on the systems that make the game show function: contestants pursuing objectives, rounds changing state, and visual feedback that helps players follow the action.",
        cards: [
          {
            title: "Contestant AI",
            text: "I worked on AI contestants that take part in the item hunt and compete with the player, making each round feel like a contest rather than a solo task.",
          },
          {
            title: "Baked lighting",
            text: "I used LightmapGI in Godot to bake lighting for the supermarket. This gave me practical experience lighting a larger indoor 3D scene.",
          },
          {
            title: "Round systems",
            text: "I built the logic for item objectives, scoring and special rounds, bringing the game-show idea together as a playable loop.",
          },
        ],
      },
      {
        label: "Reflection",
        title: "What I learned",
        text: "Supermarket Scramble gave me experience bringing several disciplines together under a jam deadline. I spent more time than usual on modelling, shaders, particle effects and lighting while still building the AI and gameplay systems needed for a playable game. I submitted it before I could finish the in-game tutorial, so the itch page includes a short guide to the controls and rules.",
      },
    ],
  },
  "trust-protocol": {
    title: "Trust // Protocol",
    category: "Brackeys Game Jam 2026.2 · Completed",
    intro:
      "A first-person arena survival shooter where you fight corrupted robots alongside companions whose allegiance can change. I built it to bring together the FPS, AI, UI and game-feel skills I had been developing.",

    banner: "../images/games-banner.png",
    itchUrl: "https://dempsey845.itch.io/trust-no-one",

    colors: {
      accent: "#75e4ec",
      hover: "#b0f4f6",
      buttonText: "#102527",
    },

    facts: [
      { label: "Engine", value: "Godot" },
      { label: "Project", value: "Brackeys Game Jam 2026.2" },
      { label: "Genre", value: "First-person arena survival shooter" },
      { label: "Status", value: "Released" },
      { label: "Platforms", value: "Windows and browser" },
      { label: "My role", value: "Programming, game design and UI" },
    ],

    sections: [
      {
        label: "The game",
        title: "Survive the arena",
        text: "Trust // Protocol is a first-person shooter about surviving waves of corrupted robots. Companion robots fight alongside the player, but their allegiance can change. That uncertainty is the central idea behind the game: even while concentrating on the next enemy, players have to pay attention to the robots around them.",
        showFacts: true,
      },
      {
        label: "Design goal",
        title: "Bringing my FPS skills together",
        text: "For this jam, I wanted to make an arena shooter that felt satisfying moment to moment. I brought together what I had learned about player movement, aiming, shooting, enemy behaviour and feedback, then built a complete game around those systems.",
        cards: [
          {
            title: "Movement and aiming",
            text: "I worked on responsive first-person movement and aiming so that moving around the arena and lining up shots felt good.",
          },
          {
            title: "Weapon feel",
            text: "I focused on the feedback around firing and hitting targets, including effects and weapon behaviour that make each shot feel more satisfying.",
          },
          {
            title: "Arena pressure",
            text: "Enemy waves keep the player moving and give the shooting mechanics a reason to be used under pressure.",
          },
        ],
      },
      {
        label: "Gameplay systems",
        title: "Robots, upgrades and abilities",
        text: "The game's systems needed to work together: enemies pursue and attack the player, companions add uncertainty to each encounter, and progression gives players more options as they survive.",
        cards: [
          {
            title: "Robot AI",
            text: "I built robot behaviours for chasing and attacking, along with the allegiance system that allows companions to become part of the threat.",
          },
          {
            title: "Wave progression",
            text: "Waves structure each run and increase the pressure as the player continues through the arena.",
          },
          {
            title: "Player abilities",
            text: "Upgrades and the unlockable Surge Attack give the player additional ways to respond when fights become more intense.",
          },
        ],
      },
      {
        label: "Finishing the game",
        title: "More than the combat loop",
        text: "I also wanted the jam submission to feel like a complete game that someone could start and understand without me explaining it. Alongside the arena gameplay, I added a tutorial, settings, menus, UI and controller support.",
        cards: [
          {
            title: "Tutorial and UI",
            text: "The tutorial introduces the controls and mechanics, while the interface communicates information the player needs during a run.",
          },
          {
            title: "Settings",
            text: "Graphics and other settings help players adjust the experience. The browser version can struggle, so the itch page recommends the Windows download where possible.",
          },
          {
            title: "Controller support",
            text: "I added controller inputs for movement, aiming, shooting, menus and the Surge Attack.",
          },
        ],
      },
      {
        label: "Scope and reflection",
        title: "What I finished and what I cut",
        text: "I became ill during the jam and had to submit the game earlier than planned. Trust // Protocol still reached a playable, complete state with a tutorial, settings and controller support, but I had to leave out planned features such as more varied enemy types and bosses. The project taught me how much difference a finished player experience makes, and how to prioritise the core game when time becomes limited.",
      },
    ],
  },
};
