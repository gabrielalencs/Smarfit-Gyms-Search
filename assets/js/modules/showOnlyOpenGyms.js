import fetchGymData from "./fetchGymData.js";
import { filterOpenGyms } from "./filterOpenOrClosedGyms.js";
import displayGymsCount from "./displayGymsCount.js";

// shows results of open gyms found as soon as we enter the page

const showOnlyOpenGyms = async () => {
    const allGyms = await fetchGymData();
    const openGyms = filterOpenGyms(allGyms);

    displayGymsCount(openGyms);
};

export default showOnlyOpenGyms;