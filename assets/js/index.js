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
    const allGyms = await fetchGymData();
    const openGyms = filterOpenGyms(allGyms);

    displayGymsCount(openGyms);
};
document.addEventListener('DOMContentLoaded', showOpenGyms);



// verifica o checkbox e faz a busca com base no mesmo

async function searchForOpenOrClosedGyms()  {
    const allGyms = await fetchGymData();
    const openGyms = filterOpenGyms(allGyms);
    
    const checkboxClosedUnited = document.getElementById('closed-united');

    if (checkboxClosedUnited.checked) {
        displayGymsCount(allGyms);
        showGymCards(allGyms) 
    } else {
        displayGymsCount(openGyms);
        showGymCards(openGyms) 
    }
}

// percorre o array passado como argumento e mostra os cards com as informações do mesmo

function showGymCards(gyms) {
    const gymCardContainer = document.querySelector('.container-gym-cards');
    gymCardContainer.innerHTML = '';

    const fragment = document.createDocumentFragment();

    gyms.forEach(gym => {
        const gymCard = document.createElement('div');
        gymCard.className = 'gym-card';

        gymCard.innerHTML = `
            <div class="card-header">
                <span class="card-status ${gym.opened ? 'status-open' : 'status-close'}">
                    ${gym.opened ? 'Aberto' : 'Fechado'}
                </span>
                <h3 class="card-title">${gym.title}</h3>
                <p class="card-address">
                    ${gym.content ? gym.content.replace(/<\/?[^>]+(>|$)/g, "") : gym.street}
                </p>
            </div>

            <div class="card-container-icons">
                <img src="assets/images/required-mask.png" alt="icon" class="card-icon">
                <img src="assets/images/required-towel.png" alt="icon" class="card-icon">
                <img src="assets/images/partial-fountain.png" alt="icon" class="card-icon">
                <img src="assets/images/allowed-lockerroom.png" alt="icon" class="card-icon">
            </div>
            
            <div class="card-schedules">
                <p class="card-schedules-container">
                    <span class="card-day">Seg. à Sex.</span>
                    <span class="card-hour">06h às 22h</span>
                </p>

                <p class="card-schedules-container">
                    <span class="card-day">Sáb</span>
                    <span class="card-hour">Fechada</span>
                </p>

                <p class="card-schedules-container">
                    <span class="card-day">Dom.</span>
                    <span class="card-hour">Fechada</span>
                </p>
            </div>
        `;

        fragment.appendChild(gymCard);
    });

    gymCardContainer.appendChild(fragment);
}



const searchGyms = async () => {
    

    searchForOpenOrClosedGyms()

   

    

   
};









buttonSearchGyms.addEventListener('click', searchGyms);