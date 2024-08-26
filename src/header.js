// function to toggle navbar on mobile devices
function toggleMobileNavbar() {
  const navbar = document.querySelector("[data-navbar]");
  const navToggleBtns = document.querySelectorAll("[data-nav-toggle-btn]");

  navToggleBtns.forEach(navToggler => {
    navToggler.addEventListener('click',() => navbar.classList.toggle("active"));
  });
}

toggleMobileNavbar();

