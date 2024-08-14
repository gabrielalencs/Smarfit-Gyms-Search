import fetchGymData from "./fetchGymData.js";
import { filterOpenGyms, filterClosedGyms } from "./filterOpenOrClosedGyms.js";
import displayGymsOpenOrClosed from "./displayGymsOpenOrClosed.js";
import filterGymsByTimeRange from "./filterGymsByTimeRange.js";
import displayGymsCount from "./displayGymsCount.js";
import showGymCards from "./showGymCards.js";
import { setStatusClass, getAcademyStatus } from "./showGymCards.js";

const inputRadioMorning = document.getElementById('radio-morning');
const inputRadioAfternoon = document.getElementById('radio-afternoon');
const inputRadioNight = document.getElementById('radio-night');
const checkboxClosedUnited = document.getElementById('closed-united');
const gymCardContainer = document.querySelector('.container-gym-cards');

const searchForGyms = async () => {

    displayGymsOpenOrClosed();

    const allGyms = await fetchGymData();
    const openGyms = filterOpenGyms(allGyms);

    let filteredGyms = openGyms;

    if (inputRadioMorning.checked || inputRadioAfternoon.checked || inputRadioNight.checked) {
        // checks which entry is marked and filters based on the same

        if (inputRadioMorning.checked) {
            filteredGyms = filterGymsByTimeRange(openGyms, '05:00', '12:00');
        } else if (inputRadioAfternoon.checked) {
            filteredGyms = filterGymsByTimeRange(openGyms, '12:01', '18:00');
        } else if (inputRadioNight.checked) {
            filteredGyms = filterGymsByTimeRange(openGyms, '18:01', '23:00');
        }

        displayGymsCount(filteredGyms);
        showGymCards(filteredGyms);


        // if the filtering entries are checked and the "closed gyms" entry is also checked, I show the filter result, plus the result for closed gyms

        if (checkboxClosedUnited.checked) {
            let closedGyms = filterClosedGyms(allGyms);
            const fragmentCardItems = document.createDocumentFragment();
    
            closedGyms.forEach(gym => {
                const gymCard = document.createElement('div');
                gymCard.className = 'gym-card';
    
                gymCard.innerHTML = `
                    <div class="card-header">
                        <span class="card-status ${setStatusClass(gym.opened)}">
                            ${getAcademyStatus(gym.opened)}
                        </span>
                        <h3 class="card-title">${gym.title}</h3>
                    </div>
                `
                fragmentCardItems.appendChild(gymCard);
            });
    
            gymCardContainer.appendChild(fragmentCardItems);
    
            displayGymsCount(gymCardContainer.children);
        }
    }
}


export default searchForGyms;