import { isNull, isUndefined } from "util";

export const isObjectEmpty = obj => {
  if(isNull(obj) || isUndefined(obj)) return false;
  return Object.entries(obj).length === 0 && obj.constructor === Object;
}

export const charTypes = [
    {
      value: 'Starships',
      id: 1,
      traits: [
        {
          value: 'crew',
          id: 1,
        },
        {
          value:'MGLT',
          id: 2,
        },
        {
          value: 'length',
          id: 3,
        },
        {
          value: 'passengers',
          id: 4,
        }
      ],
    },
    {
      value: 'People',
      id: 2,
      traits: [
        {
          value: 'mass',
          id: 1,
        },
        {
          value: 'height',
          id: 2,
        }
      ],
    }
];

export const starshipsMock = [
  {
    name: 'Starship Powerfull',
    length: 100,
    crew: 100,
    MGLT: 100,
    passengers: 100,
  },
  {
    name: 'Starship Little',
    length: 1,
    crew: 1,
    MGLT: 1,
    passengers: 1,
  }
];

export const peopleMock = [
  {
    name: 'Big guy',
    mass: 100,
    height: 100,
  },
  {
    name: 'Little boy',
    mass: 1,
    height: 1,
  }
];