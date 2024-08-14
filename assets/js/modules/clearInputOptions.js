const inputsSchedules = document.querySelectorAll('.container-options input');
const checkboxClosedUnited = document.getElementById('closed-united');

const clearInputOptions = () => {
    inputsSchedules.forEach(input => input.checked = false)
    checkboxClosedUnited.checked = false
};

export default clearInputOptions;