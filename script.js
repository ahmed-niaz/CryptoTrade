const navbar = document.querySelector("header");

window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("bg-color-primary-dark");
    navbar.classList.add("border-b");
    navbar.classList.add("border-color-gray");
  } else {
    navbar.classList.remove("bg-color-primary-dark");
    navbar.classList.remove("border-b");
    navbar.classList.remove("border-color-gray");
  }
};
// mobile menu

const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hLink = document.querySelectorAll("#hLink");
const faSolid = document.getElementsByClassName("fa-solid")[0];

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-x");
});

// Testimonial

const userText = document.getElementsByClassName("user-text");
const userImage = document.getElementsByClassName("user-image");

function Review() {
  for (Images of userImage) {
    Images.classList.remove("active-image");
  }
  for (text of userText) {
    text.classList.remove("active-text");
  }

  let i = Array.from(userImage).indexOf(event.target);
  userImage[i].classList.add("active-image");
  userText[i].classList.add("active-text");
}

// FRONT & BACK

const toggleBtn = document.getElementById("toggleBtn");
const card_one_front = document.querySelector("#card_one_front");
const card_one_back = document.querySelector("#card_one_back");
const card_two_front = document.querySelector("#card_two_front");
const card_two_back = document.querySelector("#card_two_back");
const card_three_front = document.querySelector("#card_three_front");
const card_three_back = document.querySelector("#card_three_back");

toggleBtn.addEventListener("change", () => {
  card_one_front.classList.toggle("-rotate-y-180");
  card_one_back.classList.toggle("rotate-y-180");
  card_two_back.classList.toggle("rotate-y-180");
  card_two_front.classList.toggle("-rotate-y-180");
  card_three_front.classList.toggle("-rotate-y-180");
  card_three_back.classList.toggle("rotate-y-180");
});
