// chamada para a api


const gymApiURL = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

const fetchGymData = async () => {
    const responseAPI = await fetch(gymApiURL);
    const data = await responseAPI.json();

    return data.locations;
};

export default fetchGymData;