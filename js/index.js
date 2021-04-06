const burger = document.querySelector("[data-burger]");
const dropdown = document.querySelector("[data-dropdown]");
const body = document.querySelector("[data-no-scroll]");
const blurElements = document.querySelectorAll("[data-blur]");

// Закрывает/открывает мобильное меню по клику на бургер
burger.addEventListener("click", toggleClassBurger);

// Закрывает мобильное меню по клику в backdrop
dropdown.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    toggleClassBurger();
  }
});

function toggleClassBurger() {
  dropdown.classList.toggle("shown");
  burger.classList.toggle("close");
  body.classList.toggle("no-scroll");
  blurElements.forEach((elem) => {
    elem.classList.toggle("blur");
  });
}

// Плавно прокручивает контент по якорям
const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    const goTo = anchor.hasAttribute("href")
      ? anchor.getAttribute("href")
      : "body";

    document.querySelector(goTo).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Индикация в виджете положения на странице
window.addEventListener("scroll", (e) => {
  console.log(123);
});

const animItems = document.querySelectorAll(".anim-items");

if (animItems.length > 0) {
  function animOnScroll(params) {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      console.log(animItem);
      console.log(animItemHeight);
    }
  }
}
