const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const slider = document.querySelector(".horizontal-list");

prevButton.addEventListener("click", () => {
  slider.scrollBy({
    left: -slider.offsetWidth,
    behavior: "smooth",
  });
});

nextButton.addEventListener("click", () => {
  slider.scrollBy({
    left: slider.offsetWidth,
    behavior: "smooth",
  });
});
