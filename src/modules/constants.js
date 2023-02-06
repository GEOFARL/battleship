import Ship from './Ship';

const SHIPS = [
  new Ship({ length: 5, name: 'Carrier' }),
  new Ship({ length: 4, name: 'Battleship' }),
  new Ship({ length: 3, name: 'Cruiser' }),
  new Ship({ length: 3, name: 'Cruiser' }),
  new Ship({ length: 2, name: 'Destroyer' }),
  new Ship({ length: 2, name: 'Destroyer' }),
  new Ship({ length: 2, name: 'Destroyer' }),
];

const MISSED_SHOT = 0;
const HIT = 1;
const GRID_SIZE = 10;

export {
  SHIPS,
  MISSED_SHOT,
  HIT,
  GRID_SIZE,
};
