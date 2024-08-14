const gymCardContainer = document.querySelector('.container-gym-cards');

export function setStatusClass(status) {
    return status ? 'status-open' : 'status-close';
}

export function getAcademyStatus(status) {
    return status ? 'Aberto' : 'Fechado';
}

function showAddress(gym) {
    return gym.content ? gym.content.replace(/<\/?[^>]+(>|$)/g, "") : gym.street;
}

function addRecommendationIcon(path, alt) {
    return `<img src="assets/images/${path}.png" alt="${alt}" class="card-icon">`;
}

function showMaskIcon(maskStatus) {
    return maskStatus === 'required'
        ? addRecommendationIcon('required-mask', 'icone de máscara')
        : addRecommendationIcon('recommended-mask', 'icone de máscara');
}

function showTowelIcon(towelStatus) {
    return towelStatus === 'required'
        ? addRecommendationIcon('required-towel', 'icone de toalha')
        : addRecommendationIcon('recommended-towel', 'icone de toalhaq');
}

function showFountainIcon(fountainStatus) {
    return fountainStatus === 'partial'
        ? addRecommendationIcon('partial-fountain', 'icone de garrafa')
        : addRecommendationIcon('not_allowed-fountain', 'icone de garrafa');
}

function showLockerRoomIcon(lockerStatus) {
    switch (lockerStatus) {
        case 'allowed':
            return addRecommendationIcon('allowed-lockerroom', 'icone de vestiário');
        case 'partial':
            return addRecommendationIcon('partial-lockerroom', 'icone de vestiário');
        case 'closed':
            return addRecommendationIcon('closed-lockerroom', 'icone de vestiário');
    }
}


// percorre o array passado como argumento e mostra os cards com as informações do mesmo

const showGymCards = (gyms) => {

    gymCardContainer.innerHTML = '';

    const fragmentCardItems = document.createDocumentFragment();

    gyms.forEach(gym => {
        const gymCard = document.createElement('div');
        gymCard.className = 'gym-card';

        const containerParagraph = document.createElement('div');
        containerParagraph.className = 'card-schedules';

        const gymCardSchedules = gym.schedules;

        if (gymCardSchedules) {

            gymCard.innerHTML = `
                <div class="card-header">
                    <span class="card-status ${setStatusClass(gym.opened)}">
                        ${getAcademyStatus(gym.opened)}
                    </span>
                    <h3 class="card-title">${gym.title}</h3>
                    <p class="card-address">${showAddress(gym)}</p>
                </div>

                <div class='card-container-icons'>
                    ${showMaskIcon(gym.mask)}
                    ${showTowelIcon(gym.towel)}
                    ${showFountainIcon(gym.fountain)}
                    ${showLockerRoomIcon(gym.locker_room)}
                </div>
            `;

            gymCardSchedules.forEach(({ weekdays, hour }) => {
                const paragraph = document.createElement('p');
                paragraph.className = 'card-schedules-container';

                paragraph.innerHTML = `
                    <span class="card-day">${weekdays}</span>
                    <span class="card-hour">${hour}</span>
                `
                containerParagraph.appendChild(paragraph)
            });

            gymCard.appendChild(containerParagraph);


        } else {
            gymCard.innerHTML = `
                <div class="card-header">
                    <span class="card-status ${setStatusClass(gym.opened)}">
                        ${getAcademyStatus(gym.opened)}
                    </span>
                    <h3 class="card-title">${gym.title}</h3>
                    <p class="card-address">${showAddress(gym)}</p>
                </div>
            `
        }

        fragmentCardItems.appendChild(gymCard);
    });

    gymCardContainer.appendChild(fragmentCardItems);
}


export default showGymCards;