const burger = document.querySelector(".burger");
const menuwrap = document.querySelector(".menu_wrap");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menuwrap.classList.toggle("active");
});
