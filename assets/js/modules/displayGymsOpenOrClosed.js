import fetchGymData from "./fetchGymData.js";
import { filterOpenGyms } from "./filterOpenOrClosedGyms.js";
import displayGymsCount from "./displayGymsCount.js";
import showGymCards from "./showGymCards.js";

// checks whether the user wants to view open or closed gyms

const displayGymsOpenOrClosed = async () => {
    const allGyms = await fetchGymData();
    const openGyms = filterOpenGyms(allGyms);
    
    const checkboxClosedUnited = document.getElementById('closed-united');

    if (checkboxClosedUnited.checked) {
        displayGymsCount(allGyms);
        showGymCards(allGyms);
    } else {
        displayGymsCount(openGyms);
        showGymCards(openGyms);
    }
};

export default displayGymsOpenOrClosed;