import fetchGymData from "./fetchGymData.js";
import filterOpenGyms from "./filterOpenGyms.js";
import displayGymsOpenOrClosed from "./displayGymsOpenOrClosed.js";
import filterGymsByTimeRange from "./filterGymsByTimeRange.js";
import displayGymsCount from "./displayGymsCount.js";
import showGymCards from "./showGymCards.js";


const inputRadioMorning = document.getElementById('radio-morning');
const inputRadioAfternoon = document.getElementById('radio-afternoon');
const inputRadioNight = document.getElementById('radio-night');


const searchForGyms = async () => {
    
    displayGymsOpenOrClosed();

    const allGyms = await fetchGymData();
    const openGyms = filterOpenGyms(allGyms);

    let filteredGyms = openGyms;

    if (inputRadioMorning.checked || inputRadioAfternoon.checked || inputRadioNight.checked) {
        if (inputRadioMorning.checked) {
            filteredGyms = filterGymsByTimeRange(openGyms, '05:00', '12:00');
        } else if (inputRadioAfternoon.checked) {
            filteredGyms = filterGymsByTimeRange(openGyms, '12:01', '18:00');
        } else if (inputRadioNight.checked) {
            filteredGyms = filterGymsByTimeRange(openGyms, '18:01', '23:00');
        }

        displayGymsCount(filteredGyms);
        showGymCards(filteredGyms);
    }
}


export default searchForGyms;