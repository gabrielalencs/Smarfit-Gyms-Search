import showOnlyOpenGyms from "./modules/showOnlyOpenGyms.js";
import searchForGyms from "./modules/searchForGyms.js";
import showOrHideScrollButton from "./modules/showOrHideScrollButton.js";
import clearInputOptions from "./modules/clearInputOptions.js";

const buttonSearchGyms = document.getElementById('search-btn');
const buttonClearOptions = document.getElementById('clear-btn');

document.addEventListener('DOMContentLoaded', showOnlyOpenGyms);
buttonSearchGyms.addEventListener('click', searchForGyms);
buttonClearOptions.addEventListener('click', clearInputOptions);
window.addEventListener('scroll', showOrHideScrollButton);