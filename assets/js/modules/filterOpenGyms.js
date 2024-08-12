// filtra por academias que estão abertas

const filterOpenGyms = (gyms) => {
    return gyms.filter(gym => gym.opened);
}

export default filterOpenGyms;
