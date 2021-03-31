const burger = document.querySelector("[data-burger]");
const dropdown = document.querySelector("[data-dropdown]");

burger.addEventListener("click", toggleClassBurger);

function toggleClassBurger() {
  dropdown.classList.toggle("shown");

  burger.classList.toggle("close");
}
