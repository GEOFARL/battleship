import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ship";

test('Gameboard has a 8x8 grid filled with null values', () => {
  const gameboard = new Gameboard();
  expect(gameboard.grid).toBeInstanceOf(Array);
  expect(gameboard.grid.length).toBe(8);
  expect(gameboard.grid.every(row => row.length === 8)).toBeTruthy();
  expect(gameboard.grid.every(row => row.every(cell => cell === null))).toBeTruthy();
});

test('Gameboard places a ship horizontally', () => {
  const gameboard = new Gameboard();
  const ship = new Ship({ length: 3});
  gameboard.placeShip(ship, 0, 0)

  const expectedGrid = [...new Array(8)].map(() => [...new Array(8)].fill(null));
  expectedGrid[0].splice(0, 3, ship, ship, ship);

  expect(gameboard.grid).toEqual(expectedGrid);
  expect(gameboard.ships).toContain(ship);
});

test('Gameboard places a ship vertically', () => {
  const gameboard = new Gameboard();
  const ship = new Ship({ length: 3 });
  gameboard.placeShip(ship, 0, 0, false);

  const expectedGrid = [...new Array(8)].map(() => [...new Array(8)].fill(null));
  expectedGrid[0][0] = ship;
  expectedGrid[1][0] = ship;
  expectedGrid[2][0] = ship;

  expect(gameboard.grid).toEqual(expectedGrid);
  expect(gameboard.ships).toContain(ship);
});

test('Gameboard receives attacks correctly', () => {
  const gameboard = new Gameboard();
  const ship = new Ship({ length: 3 });
  gameboard.placeShip(ship, 0, 0);

  const spy = jest.spyOn(ship, 'hit');
  gameboard.receiveAttack(0, 0);
  expect(gameboard.grid[0][0]).toBe(1);
  expect(spy).toHaveBeenCalledTimes(1);
});

test('Gameboard checks whether a cell has been attacked', () => {
  const gameboard = new Gameboard();
  const ship = new Ship({ length: 3 });
  gameboard.placeShip(ship, 0, 0);

  gameboard.receiveAttack(0, 1);
  gameboard.receiveAttack(1, 0);

  expect(gameboard.hasBeenAttacked(0, 0)).toBeFalsy();
  expect(gameboard.hasBeenAttacked(0, 1)).toBeTruthy();
  expect(gameboard.hasBeenAttacked(1, 0)).toBeTruthy();
});

test('Gameboard increases a number of sunk ships', () => {
    const gameboard = new Gameboard();
    const ship = new Ship({ length: 3 });
    gameboard.placeShip(ship, 0, 0);

    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(1, 0);
    gameboard.receiveAttack(2, 0);

    expect(gameboard.sunkShips).toBe(1);
});