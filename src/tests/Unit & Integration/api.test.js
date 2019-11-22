import { fetchDataFunction as fetchData, getStarships, getPeople } from '../../logic/api';
import Axios from 'axios';

Array.prototype.flat = function () {
    return this.reduce((acc, val) => acc.concat(val), []);
}

it('fetches by url', async () =>{
    const url = 'https://swapi.co/api/starships/';
    const result = await fetchData(url);
    expect(result.results.length).toBeGreaterThan(0);
}, 99999)

it('fails fetching', async () =>{
    const url = 'https://swapi.co/api/starshipssssss/';
    const result = await fetchData(url);
    expect(result).toHaveProperty('results');
    expect(result.results).toHaveLength(0);
})

it('fetches all spaceships', async () => {
    const url = 'https://swapi.co/api/starships/';
    const firstResult = await Axios.get(url);
    const numberOfShips = firstResult.data.count;
    const starships = await getStarships();
    expect(starships.length).toBe(numberOfShips);
}, 99999)

it('fetches all people', async () => {
    const url = 'https://swapi.co/api/people/';
    const firstResult = await Axios.get(url);
    const numberOfPeople = firstResult.data.count;
    const people = await getPeople();
    expect(people.length).toBe(numberOfPeople);
}, 99999)