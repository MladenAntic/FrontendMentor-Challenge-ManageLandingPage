const input = document.getElementById("email");
const submit = document.getElementById("submit");
const errorMessage = document.querySelector(".error-message");

const mainNavigation = document.querySelector(".navigation");
const mobileNavigation = document.getElementById("mobile-navigation");
const toggleMenu = document.querySelector(".toggle-menu");
const overlay = document.querySelector(".overlay");

const closeMenu = document.createElement("img");
closeMenu.src = "images/icon-close.svg";
closeMenu.alt = "Icon Close";
closeMenu.style.pointerEvents = "all";
closeMenu.style.cursor = "pointer";
closeMenu.style.zIndex = "100";

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!input.checkValidity()) {
    input.style.border = "1px solid red";
    errorMessage.style.display = "block";
  } else {
    input.style.border = "none";
    errorMessage.style.display = "none";
  }
});

toggleMenu.addEventListener("click", () => {
  overlay.style.display = "block";
  mobileNavigation.style.display = "block";
  mainNavigation.style.position = "fixed";
  mainNavigation.style.top = "1.5%";
  mainNavigation.style.background = "var(--very-light-gray)";
  mainNavigation.style.width = "90%";
  mainNavigation.style.zIndex = "100";
  mainNavigation.style.padding = "30px";
  mainNavigation.style.borderRadius = "5px";
  toggleMenu.replaceWith(closeMenu);
});

closeMenu.addEventListener("click", () => {
  overlay.style.display = "none";
  mobileNavigation.style.display = "none";
  mainNavigation.style.position = "relative";
  mainNavigation.style.background = "transparent";
  mainNavigation.style.width = "100%";
  mainNavigation.style.padding = "40px 0";
  closeMenu.replaceWith(toggleMenu);
});

function hideMobileMenu() {
  overlay.style.display = "none";
  mobileNavigation.style.display = "none";
  closeMenu.replaceWith(toggleMenu);
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    window.location.reload();
  } else if (window.innerWidth >= 768) {
    hideMobileMenu();
  }
});
