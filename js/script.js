const menu = document.querySelector("#site-menu");
const openButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");

function setMenu(open) {
  menu.classList.toggle("is-open", open);
  menu.setAttribute("aria-hidden", String(!open));
  openButton.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
  if (open) closeButton.focus();
  else openButton.focus();
}

openButton.addEventListener("click", () => setMenu(true));
closeButton.addEventListener("click", () => setMenu(false));
menu.addEventListener("click", (event) => {
  if (event.target.matches("a")) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});
