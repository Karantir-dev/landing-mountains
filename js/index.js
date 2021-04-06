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
window.addEventListener("scroll", animOnScroll);

const animItems = document.querySelectorAll("[data-anim-item]");
const documentAnchors = document.querySelectorAll("[data-document-anchor]");

function animOnScroll() {
  if (documentAnchors.length > 0) {
    for (anchor of documentAnchors) {
      if (isPartiallyVisible(anchor)) {
        for (item of animItems) {
          if (item.href.includes(anchor.id)) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        }
      }
    }
  }
}

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;

  return bottom > height * 0.6 && height * 0.6 + window.innerHeight >= bottom;
}

animOnScroll();
