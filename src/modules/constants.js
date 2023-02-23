import Ship from './Ship';

const SHIPS = [
  new Ship({ length: 5, name: 'Carrier', id: 7 }),
  new Ship({ length: 4, name: 'Battleship', id: 6 }),
  new Ship({ length: 3, name: 'Cruiser', id: 5 }),
  new Ship({ length: 3, name: 'Cruiser', id: 4 }),
  new Ship({ length: 2, name: 'Destroyer', id: 3 }),
  new Ship({ length: 2, name: 'Destroyer', id: 2 }),
  new Ship({ length: 2, name: 'Destroyer', id: 1 }),
];

const MISSED_SHOT = 0;
const HIT = 1;
const GRID_SIZE = 10;
const HIT_TIME = 700;

export {
  SHIPS,
  MISSED_SHOT,
  HIT,
  GRID_SIZE,
  HIT_TIME,
};
