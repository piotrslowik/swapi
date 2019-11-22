import React, { useState, useEffect } from 'react';
import './stylesheets/App.scss';

import PlayerPanel from './components/PlayerPanel';
import Dashboard from './components/Dashboard';
import Loader from './components/Loader';
import ErrorComponent from './components/Error';

import { getStarships, getPeople } from './logic/api';
import { charTypes } from './logic/helpers';

const App = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [chosenCharType, chooseCharType] = useState(charTypes[0]);
  const [starships, setStarships] = useState([]);
  const [people, setPeople] = useState([]);
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
  const [char1, setChar1] = useState({});
  const [char2, setChar2] = useState({});
  const [trait, setTrait] = useState(chosenCharType.traits[0]);

  useEffect(() => {
    fetchStarships();
    fetchPeople();
  }, []);
  useEffect(()=> {
    givePoint();
  }, [char1, char2]);

  const fetchStarships = async () => {
    const result = await getStarships();
    setStarships(result);
  }
  const fetchPeople = async () => {
    const result = await getPeople();
    setPeople(result);
    setIsLoading(false);
  }

  const handleChooseChar = char => {
    chooseCharType(char);
    setTrait(char.traits[0]);
  }
  const handleChooseTrait = trait => {
    setTrait(trait);
  }

  const draw = () => {
    if (chosenCharType.value === 'Starships') {
      const index = Math.floor(Math.random() * starships.length);
      return starships[index];
    } else {
      const index = Math.floor(Math.random() * people.length);
      return people[index];
    }
  }

  const givePoint = () => {
    if (isUnknown(trait.value)) return;
    else {
      const p1 = parseInt(char1[trait.value]);
      const p2 = parseInt(char2[trait.value]);
      
      if (p1 > p2) addPoint(points1, setPoints1);
      else if (p1 < p2) addPoint(points2, setPoints2);
      else return;
    }
  }

  const isUnknown = trait => {
    if (char1[trait] === 'unknown' || char2[trait] === 'unknown') return true;
    else return false
  }

  const addPoint = (points, setPoints) => {
    let newPoints = points;
    newPoints++;
    setPoints(newPoints);
  }

  const play = () => {
    setChar1(draw());
    setChar2(draw());
  }

  return (
    <div className="App">
      <PlayerPanel points={points1} no={1} character={char1} />
      <PlayerPanel points={points2} no={2} character={char2} />
      {isLoading
      ? <Loader />
      : people.length === 0 || starships.length === 0
        ? <ErrorComponent text="Couldn't load data" />
        : <Dashboard
            charTypes={charTypes}
            chosenCharType={chosenCharType}
            chooseChar={handleChooseChar}
            chosenTrait={trait}
            chooseTrait={handleChooseTrait}
            onClick={play}
          />
      }
    </div>
  );
}

export default App;
