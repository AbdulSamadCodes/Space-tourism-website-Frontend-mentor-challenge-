//function to toggle navbar on mobile devices
function toggleMobileNavbar() {
  const navbar = document.querySelector("[data-navbar]");
  const navToggleBtns = document.querySelectorAll("[data-nav-toggle-btn]");

  navToggleBtns.forEach(navToggler => {
    navToggler.addEventListener('click',() => navbar.classList.toggle("active"));
  });
}

toggleMobileNavbar();

//function to get the minimum gap between outline and logo
function getMinimumGap() {
  return parseInt(getComputedStyle(document.documentElement).getPropertyValue('--minimum-outline-gap'));
}

//function to update the navbar outline width dynmaically
function updateOutlineWidth() {
  const logo = document.querySelector('[data-logo]');
  const navbar = document.querySelector('[data-navbar]');

  let width;
  const {right:logoPosition} = logo.getBoundingClientRect();
  const {left:navbarPosition} = navbar.getBoundingClientRect();
  const minimumGap = getMinimumGap();

  width = Math.floor((navbarPosition - logoPosition) - minimumGap);
  navbar.style.setProperty('--outline-width',`${width}px`);  
}

window.addEventListener("resize",updateOutlineWidth);
window.addEventListener("load",updateOutlineWidth);

