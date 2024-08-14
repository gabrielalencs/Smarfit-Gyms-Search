import fetchGymData from "./fetchGymData.js";
import { filterOpenGyms } from "./filterOpenOrClosedGyms.js";
import displayGymsCount from "./displayGymsCount.js";

// mostra academias abertas assim que entramos na aplicação 

const showOnlyOpenGyms = async () => {
    const allGyms = await fetchGymData();
    const openGyms = filterOpenGyms(allGyms);

    displayGymsCount(openGyms);
};

export default showOnlyOpenGyms;