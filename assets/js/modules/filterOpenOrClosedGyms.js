export const filterOpenGyms = (gyms) => {
    return gyms.filter(gym => gym.opened);
};

export const filterClosedGyms = (gyms) => {
    return gyms.filter(gym => !gym.opened);
};