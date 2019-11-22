import axios from 'axios';

export const getStarships = async () => {
    const starships = [];
    try {
        let result = await fetchData('https://swapi.co/api/starships/');
        starships.push(result.results);
        while (result.next) {
            result = await fetchData(result.next);
            starships.push(result.results);
        }
    }
    catch (error) {
        console.log('Fetching starships failed', error);
    }
    return starships.flat();
}

export const getPeople = async () => {
    const people = [];
    try {
        let result = await fetchData('https://swapi.co/api/people/');
        people.push(result.results);
        while (result.next) {
            result = await fetchData(result.next);
            people.push(result.results);
        }
    }
    catch (error) {
        console.log('Fetching people failed', error);
    }
    return people.flat();
}

const fetchData = async url => {
    try {
        const result = await axios.get(url);
        return result.data;
    }
    catch (error) {
        console.log('Fetching failed', error);
        return {
            results: [],
        };
    }
}

export const fetchDataFunction = fetchData;