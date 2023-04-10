let accordions = document.querySelectorAll(".accordions");

let toggleMenu = (menu) => {
  let arrowDown = menu.querySelector(".arrow-down");
  let arrowUp = menu.querySelector(".arrow-up");
  let content = menu.querySelector(".content");

  arrowDown.classList.toggle("hidden");
  arrowUp.classList.toggle("hidden");
  content.classList.toggle("hidden");
};

accordions.forEach((menu) => {
  menu.addEventListener("click", () => {
    toggleMenu(menu);
  });
});
