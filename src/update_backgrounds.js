//function to update the backgorunds on different devices
function updateBackgrounds() {
  const backgroundContainers = document.querySelectorAll("[data-bg-container]");

  backgroundContainers.forEach((bgContainer) => {
    const {mobileBg, tabletBg, desktopBg} = bgContainer.dataset;

    if(window.innerWidth < 575) {
      bgContainer.style.backgroundImage = `url("${mobileBg}")`;      
    }
    if(window.innerWidth > 575) {
      bgContainer.style.backgroundImage = `url("${tabletBg}")`;
    } 
    if(window.innerWidth > 768) {
      bgContainer.style.backgroundImage = `url("${desktopBg}")`;
    } 
  })
}

window.addEventListener("resize",updateBackgrounds);
window.addEventListener("load",updateBackgrounds);
