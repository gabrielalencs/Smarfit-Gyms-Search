import searchForGyms from "./searchForGyms.js";
import showOnlyOpenGyms from "./showOnlyOpenGyms.js";


const buttonSearchGyms = document.getElementById('search-btn');

document.addEventListener('DOMContentLoaded', showOnlyOpenGyms);
buttonSearchGyms.addEventListener('click', searchForGyms);