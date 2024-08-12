import showOnlyOpenGyms from "./modules/showOnlyOpenGyms.js";
import searchForGyms from "./modules/searchForGyms.js";


const buttonSearchGyms = document.getElementById('search-btn');

document.addEventListener('DOMContentLoaded', showOnlyOpenGyms);
buttonSearchGyms.addEventListener('click', searchForGyms);