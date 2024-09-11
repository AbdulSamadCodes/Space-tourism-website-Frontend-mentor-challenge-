import {updateDestinationContent} from '/Destination/destinations.js';
import {updateCrewContent} from '/Crew/crew.js';
import {updateTechnologyContent} from "/Technology/technology.js"

//async function to fetch data from JSON file
async function fetchPagesData() {
  const responseBody = await fetch('/JSON/data.json');
  const pagesData = await responseBody.json();

  return pagesData;
}

async function updatePagesData() {
  const pagesContent = await fetchPagesData();

  updateDestinationContent(pagesContent);
  updateCrewContent(pagesContent);
  updateTechnologyContent(pagesContent);
}

updatePagesData();