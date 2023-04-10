import Swiper, { Navigation, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

let viewWidth = window.innerWidth;

let updateSlidesPerPage = (slider, width) => {
  if (width <= 767) {
    slider.params.slidesPerView = 1;
    slider.update();
    return;
  }

  if (width >= 768 && width <= 1023) {
    slider.params.slidesPerView = 2;
    slider.update();
    return;
  }

  if (width >= 1024) {
    slider.params.slidesPerView = 4;
    slider.update();
    return;
  }
};

let courseSlider = new Swiper("#courses-carousel", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3800,
    disableOnInteraction: false,
  },

  modules: [Autoplay],
});

let coursePrevButton = document.getElementById("course-prev-button");
let courseNextButton = document.getElementById("course-next-button");

coursePrevButton.addEventListener("click", () => {
  courseSlider.slidePrev();
});
courseNextButton.addEventListener("click", () => {
  courseSlider.slideNext();
});

let memberSlider = new Swiper("#members-carousel", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3800,
    disableOnInteraction: false,
  },

  modules: [Autoplay],
});

updateSlidesPerPage(memberSlider, viewWidth);

window.addEventListener("resize", () => {
  viewWidth = window.innerWidth;
  updateSlidesPerPage(memberSlider, viewWidth);
});

let memberPrevButton = document.getElementById("member-prev-button");
let memberNextButton = document.getElementById("member-next-button");

memberPrevButton.addEventListener("click", () => {
  memberSlider.slidePrev();
});
memberNextButton.addEventListener("click", () => {
  memberSlider.slideNext();
});

let evaluationCarousel = new Swiper("#evaluations-carousel", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3800,
    disableOnInteraction: false,
  },

  modules: [Autoplay],
});

let evaluationPrevButton = document.getElementById("evaluations-prev-button");
let evaluationNextButton = document.getElementById("evaluations-next-button");

evaluationPrevButton.addEventListener("click", () => {
  evaluationCarousel.slidePrev();
});
evaluationNextButton.addEventListener("click", () => {
  evaluationCarousel.slideNext();
});
