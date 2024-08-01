const gymApiURL = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

const buttonSearchGyms = document.getElementById('search-btn');



const callToGymDataApi = async () => {
    const responseAPI = await fetch(gymApiURL);
    const data = await responseAPI.json();

    return data.locations;
}

function showsResultsAcademiesFound(gymsFoundArg) {
    const gymsFound = document.querySelector('.academy-closed span');

    gymsFound.textContent = gymsFoundArg.length
}

callToGymDataApi().then(response => {
    let gymData = response

    showsResultsAcademiesFound(gymData)
});