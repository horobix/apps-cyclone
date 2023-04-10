import "animate.css";

let header = document.getElementById("ac-page-header");
let toggleBurger = document.getElementById("ac-header-toggle-burger");
let toggleClose = document.getElementById("ac-header-toggle-close");
let toggleMenu = document.getElementById("ac-header-toggle-menu");
let viewWidth = window.innerWidth;

if (window.pageYOffset > 0) {
  header.classList.add("ac-header-bg");
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("ac-header-bg");
  } else {
    header.classList.remove("ac-header-bg");
  }
});

toggleBurger.addEventListener("click", () => {
  toggleMenu.classList.toggle("hidden");
  toggleMenu.classList.toggle("flex");
  document.body.classList.add("no-scroll");
});

toggleClose.addEventListener("click", () => {
  toggleMenu.classList.toggle("hidden");
  toggleMenu.classList.toggle("flex");
  document.body.classList.remove("no-scroll");
});

if (viewWidth >= 1024) {
  toggleMenu.classList.remove("animate__animated", "animate__slideInRight");
} else {
  toggleMenu.classList.add("animate__animated", "animate__slideInRight");
}

window.addEventListener("resize", (event) => {
  viewWidth = window.innerWidth;
  if (viewWidth >= 1024) {
    toggleMenu.classList.remove("animate__animated", "animate__slideInRight");
  } else {
    toggleMenu.classList.add("animate__animated", "animate__slideInRight");
  }
});
