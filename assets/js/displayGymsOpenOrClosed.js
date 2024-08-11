import fetchGymData from "./fetchGymData.js";
import filterOpenGyms from "./filterOpenGyms.js";
import displayGymsCount from "./displayGymsCount.js";


// checa se o usuario quer visualizar academias abertas ou fechadas

const checkboxClosedUnited = document.getElementById('closed-united');

const displayGymsOpenOrClosed = async () => {
    const allGyms = await fetchGymData();
    const openGyms = filterOpenGyms(allGyms);
    
    const checkboxClosedUnited = document.getElementById('closed-united');

    if (checkboxClosedUnited.checked) {
        displayGymsCount(allGyms);
        // showGymCards(allGyms);
    } else {
        displayGymsCount(openGyms);
        // showGymCards(openGyms);
    }
};

export default displayGymsOpenOrClosed;
