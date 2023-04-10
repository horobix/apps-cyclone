import { courses } from "./constants.js";

let protocol = window.location.protocol;
let hostname = window.location.hostname;
var port = window.location.port;

let courseCards = document.getElementById("course-cards");
let cards = document.querySelectorAll(".card");
let tabs = document.querySelectorAll(".course-selector");
let pagination = document.getElementById("pagination");
let totalItems = document.getElementById("total-items");

let createCard = (course) => {
  return `
    <div class="card offline-course-tag scale-down-center">
      <img
        class="w-full"
        src=${course.thumbnail}
        alt="${course.title} Course"
      />
      <div class="pt-[40px] p-[20px] lg:p-[40px] bg-ac-gray-1">
        <div>
          <p class="uppercase text-ac-gray-12 font-CentraNo2Light">
            ${course.type}
          </p>
          <a class="mt-[4px] text-2xl" href="./course-detail.html">${
            course.title
          }</a>
          <div class="flex items-center justify-between mt-[16px]">
            <div class="flex items-center">
              <img
                class="mr-[8px]"
                src="./src/images/courses/teacher-1.svg"
                alt="${course.teacher}"
              />
              <p class="text-ac-gray-12 font-CentraNo2Light">
              ${course.teacher}
              </p>
            </div>
            <p class="text-[20px]">${new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            })
              .format(course.price)
              .replace("₫", "đ")}</p>
          </div>
        </div>
      </div>
    </div>
  `;
};

let renderCards = (courses) => {
  courseCards.innerHTML = "";

  courses.forEach((course) => {
    courseCards.innerHTML += createCard(course);
  });
};

let changeTab = (courseType) => {
  if (courseType == "all") {
    renderCards(courses);
  } else {
    let _courses = courses.filter((course) => course.type == courseType);
    renderCards(_courses);
    pagination.classList.remove("hidden");
    totalItems.innerText = `Total ${_courses.length} items`;

    if (_courses.length) {
    } else {
      courseCards.innerHTML = `
        <p class="col-span-3 py-5 font-CentraNo2Light text-ac-gray-12">
          Unfortunately, we haven't developed any courses for this subject yet.
        </p>
      `;
      pagination.classList.add("hidden");
    }
  }
};

setTimeout(() => {
  renderCards(courses);
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((_tab, _index) => {
        if (_index == index) {
          _tab.classList.add("text-white");
          _tab.classList.remove("text-ac-gray-22");
          _tab.classList.add("bg-ac-gray-22");
          _tab.classList.remove("bg-ac-gray-1");
        } else {
          _tab.classList.add("text-ac-gray-22");
          _tab.classList.remove("text-white");
          _tab.classList.add("bg-ac-gray-1");
          _tab.classList.remove("bg-ac-gray-22");
        }
      });
      changeTab(tab.getAttribute("course"));
    });
  });
  pagination.classList.remove("hidden");
  totalItems.innerText = `Total ${courses.length} items`;
}, 1000);
