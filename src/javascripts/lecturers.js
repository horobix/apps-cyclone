import Swiper, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

let viewWidth = window.innerWidth;

let lecturers = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 40,
  autoplay: {
    delay: 5000,
  },
  modules: [Autoplay],
});

let prevButton = document.getElementById("prev-button");
let nextButton = document.getElementById("next-button");

prevButton.addEventListener("click", () => {
  lecturers.slidePrev();
});

nextButton.addEventListener("click", () => {
  lecturers.slideNext();
});

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

updateSlidesPerPage(lecturers, viewWidth);

window.addEventListener("resize", () => {
  viewWidth = window.innerWidth;
  updateSlidesPerPage(lecturers, viewWidth);
});
