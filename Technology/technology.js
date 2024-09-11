//function to update technology  pages content
function updateTechnologyContent({technology : technologyContent}) {
  const technologyName = document.querySelector("[data-technology-name]");
  const technologyDescription = document.querySelector("[data-technology-description]");
  const technologyPortraitImg = document.querySelector("[data-technology-portrait-img]");
  const technologyLandscapeImg = document.querySelector("[data-technology-landscape-img]");
  
  const technologyTabs = document.querySelectorAll("[data-technology-tab]");
  technologyTabs.forEach((technologyTab,tabIndex) => {
    technologyTab.addEventListener("click",() => {
       const { name, description, images : {portrait : portraitImgSrc, landscape : landscapeImgSrc }} 
             = technologyContent[tabIndex];
             
      technologyName.textContent = name;
      technologyDescription.textContent = description;
      technologyPortraitImg.srcset = portraitImgSrc.slice(1);
      technologyLandscapeImg.src = landscapeImgSrc.slice(1);      
    })
  });
}

export {updateTechnologyContent};