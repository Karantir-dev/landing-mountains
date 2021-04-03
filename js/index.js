const burger = document.querySelector("[data-burger]");
const dropdown = document.querySelector("[data-dropdown]");
const body = document.querySelector("[data-no-scroll]");

burger.addEventListener("click", toggleClassBurger);

function toggleClassBurger() {
  dropdown.classList.toggle("shown");
  burger.classList.toggle("close");
  body.classList.toggle("no-scroll");
}

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
