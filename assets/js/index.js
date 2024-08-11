// imports

import fetchGymData from "./fetchGymData.js";

import displayGymsCount from "./displayGymsCount.js";

import filterOpenGyms from "./filterOpenGyms.js";

import showOnlyOpenGyms from "./showOnlyOpenGyms.js";

import displayGymsOpenOrClosed from "./displayGymsOpenOrClosed.js";

import showGymCards from "./showGymCards.js";



// events

document.addEventListener('DOMContentLoaded', showOnlyOpenGyms);





const buttonSearchGyms = document.getElementById('search-btn');

const inputRadioMorning = document.getElementById('radio-morning');
const inputRadioAfternoon = document.getElementById('radio-afternoon');
const inputRadioNight = document.getElementById('radio-night');





function filterGymsByTimeRange(gyms, startTime, endTime) {
    return gyms.filter(gym =>
        gym.schedules.some(item => item.hour >= startTime && item.hour <= endTime)
    ).map(gym => {
        const filteredSchedules = gym.schedules.map(schedule => {

            if ((schedule.weekdays === 'Sáb.' || schedule.weekdays === 'Dom.') && (schedule.hour >= startTime && schedule.hour <= endTime)) {
                return schedule;
            } 

            if (schedule.hour == 'Fechada') {
                return schedule
            }

  
            if (schedule.weekdays === 'Seg. à Sex.' && schedule.hour >= startTime && schedule.hour <= endTime) {
                return schedule;
            }

            return null;
        }).filter(schedule => schedule !== null);

        return {
            ...gym,
            schedules: filteredSchedules
        };
    });
}






// verifica os inputs e checkbox marcado e faz a busca com base no mesmo

async function searchForOpenOrClosedGyms() {

    // mostra academias abertas ou fechadas com base no input checkbox

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




const searchGyms = async () => {
    searchForOpenOrClosedGyms()



};









buttonSearchGyms.addEventListener('click', searchGyms);