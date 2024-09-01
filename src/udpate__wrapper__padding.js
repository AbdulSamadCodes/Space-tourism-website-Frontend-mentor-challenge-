//functionn to compute the wrapper inline padding
function computeWrapperPadding(wrapper, navbar) {
  const wrapperLeftPosition = Math.floor(wrapper.getBoundingClientRect().left);
  
  const navbarLeftPosition = Math.floor(navbar.getBoundingClientRect().left);
  const navbarLeftInset = Math.floor(parseInt(getComputedStyle(navbar).getPropertyValue('--left-inset')));
  const outlineWidth = Math.floor(parseInt(getComputedStyle(navbar).getPropertyValue('--outline-width')))
  const outlineLeftPosition = Math.floor(navbarLeftPosition - (outlineWidth - navbarLeftInset));

  const wrapperPaddingInline = outlineLeftPosition - wrapperLeftPosition;
  return wrapperPaddingInline;
}

//function to update the wrapper padding inline
function updateWrapperPadding(paddingInline) {
  document.documentElement.style.setProperty('--wrapper-padding-inline',`${paddingInline}px`);  
}

function handleWrapperPadding() {
  const wrapper = document.querySelector('[data-wrapper]');
  const navbar = document.querySelector('[data-navbar]');
  
  const defaultWrapperPaddingInline = 20;
  const paddingInline = window.innerWidth > 992 ? computeWrapperPadding(wrapper,navbar) : defaultWrapperPaddingInline; 

  updateWrapperPadding(paddingInline);
}

window.addEventListener("resize",handleWrapperPadding);
window.addEventListener("load",handleWrapperPadding);

updateWrapperPadding();






