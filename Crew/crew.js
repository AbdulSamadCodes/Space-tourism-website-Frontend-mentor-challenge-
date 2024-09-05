//function to update crew pages content
function updateCrewContent({crew : crewContent}) {
  const crewRole = document.querySelector('[data-crew-member-role]');
  const crewName = document.querySelector('[data-crew-member-name]');
  const crewBio = document.querySelector('[data-crew-bio]');

  const crewImg = document.querySelector('[data-crew-img]');

  const crewTabs = document.querySelectorAll('[data-crew-tab]');
  crewTabs.forEach((tab, tabIndex) => tab.addEventListener('click', () => {
    const { role, name, bio, images:{webp:imgSrc}} = crewContent[tabIndex];
      
    crewRole.textContent = role;
    crewName.textContent = name;
    crewBio.textContent = bio;

    crewImg.src = imgSrc.slice(1);
  }));
}

export {updateCrewContent};

