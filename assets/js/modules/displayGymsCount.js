
// mostra na tela o resultado de academias encontradas

const displayGymsCount = (gyms) => {
    const gymsCountElement = document.querySelector('.academy-closed span');

    gymsCountElement.textContent = gyms.length
}

export default displayGymsCount;