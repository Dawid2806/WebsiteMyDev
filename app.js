const arrow = document.querySelectorAll(".section__four__boxs__box--icon");
const answer = document.querySelectorAll(".section__four__boxs__box__answer");
const menuBtn = document.querySelector(".nav__iconBurger");
const NavMenu = document.querySelector(".nav__items");
const arrowEl = [...arrow];
for (let i = 0; i < arrowEl.length; i++) {
  arrowEl[i].addEventListener("click", () => {
    let showAnswer = answer[i];
    showAnswer.classList.toggle("active");
  });
}
menuBtn.addEventListener("click", () => {
  NavMenu.classList.add("active");
  const exitBtn = document.createElement("li");
  exitBtn.innerHTML = `<i class="fi fi-br-cross"></i>`;
  exitBtn.classList.toggle("nav__items__item");
  NavMenu.insertAdjacentElement("afterbegin", exitBtn);
  exitBtn.addEventListener("click", () => {
    exitBtn.remove(exitBtn);
    NavMenu.classList.remove("active");
  });
});
