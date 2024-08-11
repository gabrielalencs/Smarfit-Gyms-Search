// percorre o array passado como argumento e mostra os cards com as informações do mesmo

const showGymCards = (gyms) => {
    const gymCardContainer = document.querySelector('.container-gym-cards');
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
                        <span class="card-status ${gym.opened ? 'status-open' : 'status-close'}">
                            ${gym.opened ? 'Aberto' : 'Fechado'}
                        </span>

                        <h3 class="card-title">${gym.title}</h3>

                        <p class="card-address">
                            ${gym.content ? gym.content.replace(/<\/?[^>]+(>|$)/g, "") : gym.street}
                        </p>
                    </div>

                    
                    <div class='card-container-icons'>
                        ${gym.mask == 'required'
                    ? '<img src="assets/images/required-mask.png" alt="icon" class="card-icon">'
                    : '<img src="assets/images/recommended-mask.png" alt="icon" class="card-icon">'
                }

                        ${gym.towel == 'required'
                    ? '<img src="assets/images/required-towel.png" alt="icon" class="card-icon">'
                    : '<img src="assets/images/recommended-towel.png" alt="icon" class="card-icon">'
                }

                        ${gym.fountain == 'partial'
                    ? '<img src="assets/images/partial-fountain.png" alt="icon" class="card-icon">'
                    : '<img src="assets/images/not_allowed-fountain.png" alt="icon" class="card-icon">'
                }

                        ${gym.locker_room == 'allowed'
                    ? '<img src="assets/images/allowed-lockerroom.png" alt="icon" class="card-icon">'
                    : gym.locker_room == 'partial'
                        ? '<img src="assets/images/partial-lockerroom.png" alt="icon" class="card-icon">'
                        : '<img src="assets/images/closed-lockerroom.png" alt="icon" class="card-icon">'
                }
                </div>
                    
            `;


            gymCardSchedules.forEach(schedule => {
                const paragraph = document.createElement('p');
                paragraph.className = 'card-schedules-container';

                paragraph.innerHTML = `
                    <span class="card-day">${schedule.weekdays}</span>
                    <span class="card-hour">${schedule.hour}</span>
                `

                containerParagraph.appendChild(paragraph)
            });

            gymCard.appendChild(containerParagraph);



        } else {
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
            `
        }


        fragmentCardItems.appendChild(gymCard);

    });


    gymCardContainer.appendChild(fragmentCardItems);
}