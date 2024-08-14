// shows on the screen the results of gyms found

const displayGymsCount = (gyms) => {
    const gymsCountElement = document.querySelector('.academy-closed span');

    gymsCountElement.textContent = gyms.length
}

export default displayGymsCount;