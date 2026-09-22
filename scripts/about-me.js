const animatedElements = document.querySelectorAll(".scroll-animation");

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.2,
  },
);

animatedElements.forEach((element) => {
  scrollObserver.observe(element);
});
