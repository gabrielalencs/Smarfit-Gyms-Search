const gymApiURL = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

const buttonSearchGyms = document.getElementById('search-btn');

// chamada para a api

const fetchGymData = async () => {
    const responseAPI = await fetch(gymApiURL);
    const data = await responseAPI.json();

    return data.locations;
}


// mostra na tela o resultado de academias encontradas

function displayGymsCount(gyms) {
    const gymsCountElement = document.querySelector('.academy-closed span');

    gymsCountElement.textContent = gyms.length
}


// filtra por academias que estão abertas

function filterOpenGyms(gyms) {
    return gyms.filter(gym => gym.opened);
}



// mostra academias abertas assim que entramos na aplicação 

const showOpenGyms = async () => {
    const gymData = await fetchGymData();
    const openGyms = filterOpenGyms(gymData);
    
    displayGymsCount(openGyms);
};
document.addEventListener('DOMContentLoaded', showOpenGyms);



// verifica o checkbox e faz a busca com base no mesmo

function searchForOpenAndClosedGyms(gyms) {
    const checkboxClosedUnited = document.getElementById('closed-united');

    if (checkboxClosedUnited.checked) {
        displayGymsCount(gyms);
    } else {
        const openGyms = filterOpenGyms(gyms);
        displayGymsCount(openGyms);
    }
}



const searchGyms = async () => {
    const gymData = await fetchGymData();

    searchForOpenAndClosedGyms(gymData)
};


buttonSearchGyms.addEventListener('click', searchGyms);