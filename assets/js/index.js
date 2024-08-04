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

async function searchForOpenOrClosedGyms() {
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


fetchGymData().then(response => {

    let abertas = filterOpenGyms(response)

    abertas.forEach(item => {

        let horarios = item.schedules;

        let filtradoManha = horarios.filter(item => {

            return item.hour >= '06:00' && item.hour <= '12:00'

        });

        let filtradoTarde = horarios.filter(item => {

            return item.hour >= '12:01' && item.hour <= '18:00'

        });

        let filtradoNoite = horarios.filter(item => {

            return item.hour >= '18:01' && item.hour <= '23:00'

        });

        console.log(filtradoNoite);

    });

});




// percorre o array passado como argumento e mostra os cards com as informações do mesmo

function showGymCards(gyms) {
    const gymCardContainer = document.querySelector('.container-gym-cards');
    gymCardContainer.innerHTML = '';

    const fragmentCardItems = document.createDocumentFragment();


    gyms.forEach(gym => {
        const gymCard = document.createElement('div');
        gymCard.className = 'gym-card';

        const gymCardSchedules = gym.schedules;

        const containerParagraph = document.createElement('div');
        containerParagraph.className = 'card-schedules';

        gymCardSchedules.forEach(schedule => {
            const paragraph = document.createElement('p');
            paragraph.className = 'card-schedules-container';

            paragraph.innerHTML = `
                <span class="card-day">${schedule.weekdays}</span>
                <span class="card-hour">${schedule.hour}</span>
            `

            containerParagraph.appendChild(paragraph)
        });


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
                ${
                    gym.mask == 'required' 
                        ? '<img src="assets/images/required-mask.png" alt="icon" class="card-icon">' 
                        : '<img src="assets/images/recommended-mask.png" alt="icon" class="card-icon">'
                }
                ${
                    gym.towel == 'required' 
                        ? '<img src="assets/images/required-towel.png" alt="icon" class="card-icon">' 
                        : '<img src="assets/images/recommended-towel.png" alt="icon" class="card-icon">'
                }
                ${
                    gym.fountain == 'partial' 
                        ? '<img src="assets/images/partial-fountain.png" alt="icon" class="card-icon">' 
                        : '<img src="assets/images/not_allowed-fountain.png" alt="icon" class="card-icon">'
                }
                ${
                    gym.fountain == 'partial' 
                        ? '<img src="assets/images/partial-fountain.png" alt="icon" class="card-icon">' 
                        : '<img src="assets/images/not_allowed-fountain.png" alt="icon" class="card-icon">'
                       
                }
               
            </div>
        `;

        // <img src="assets/images/required-mask.png" alt="icon" class="card-icon">
        // <img src="assets/images/required-towel.png" alt="icon" class="card-icon">
        // <img src="assets/images/partial-fountain.png" alt="icon" class="card-icon">
        // <img src="assets/images/allowed-lockerroom.png" alt="icon" class="card-icon">

        gymCard.appendChild(containerParagraph);
        fragmentCardItems.appendChild(gymCard);
    });


    gymCardContainer.appendChild(fragmentCardItems);
}




const searchGyms = async () => {
    searchForOpenOrClosedGyms()
};









buttonSearchGyms.addEventListener('click', searchGyms);