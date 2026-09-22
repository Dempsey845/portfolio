const gamePreviews = document.querySelectorAll(".game-preview");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("visible", entry.isIntersecting);
    });
  },
  {
    threshold: 0.2,
  },
);

gamePreviews.forEach((preview) => {
  observer.observe(preview);
});
