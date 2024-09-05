//function to update destination pages content
function updateDestinationContent({ destinations : destinationsContent }) {
  const destinationName = document.querySelector('[data-destination-name]');
  const destinationDescription = document.querySelector('[data-destination-description]');
  const averageDistance = document.querySelector('[data-avg-distance]');
  const estimatedTime = document.querySelector('[data-est-time]');

  const destinationImg = document.querySelector('[data-destination-img]');

  const destinationTabs = document.querySelectorAll('[data-destination-tab]');  
  destinationTabs.forEach((tab, tabIndex) => tab.addEventListener('click', () => {
    const { name, description, distance, travel : estTime , images : {webp:imgSrc}} = destinationsContent[tabIndex];

    destinationName.textContent = name;
    destinationDescription.textContent = description;
    averageDistance.textContent = distance;
    estimatedTime.textcontent = estTime;

    destinationImg.src = imgSrc.slice(1);
  }));
} 

export {updateDestinationContent};