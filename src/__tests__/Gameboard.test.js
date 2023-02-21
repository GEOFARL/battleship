import { HIT } from "../modules/constants";
import Gameboard from "../modules/Gameboard";
import Ship from "../modules/Ship";

test('Gameboard has a 10x10 grid filled with null values', () => {
  const gameboard = new Gameboard();
  expect(gameboard.grid).toBeInstanceOf(Array);
  expect(gameboard.grid.length).toBe(10);
  expect(gameboard.grid.every(row => row.length === 10)).toBeTruthy();
  expect(gameboard.grid.every(row => row.every(cell => cell === null))).toBeTruthy();
});

test('Gameboard places a ship horizontally', () => {
  const gameboard = new Gameboard();
  const ship = new Ship({ length: 3});
  gameboard.placeShip(ship, [2, 0])

  const expectedGrid = [...new Array(10)].map(() => [...new Array(10)].fill(null));
  expectedGrid[0].splice(0, 3, ship, ship, ship);

  expect(gameboard.grid).toEqual(expectedGrid);
  // expect(gameboard.ships).toContain(ship);
});

test('Gameboard places a ship vertically', () => {
  const gameboard = new Gameboard();
  const ship = new Ship({ length: 3 });
  gameboard.placeShip(ship, [0, 0], false);

  const expectedGrid = [...new Array(10)].map(() => [...new Array(10)].fill(null));
  expectedGrid[0][0] = ship;
  expectedGrid[1][0] = ship;
  expectedGrid[2][0] = ship;

  expect(gameboard.grid).toEqual(expectedGrid);
  // expect(gameboard.ships).toContain(ship);
});

test('Gameboard receives attacks correctly', () => {
  const gameboard = new Gameboard();
  const ship = new Ship({ length: 3 });
  gameboard.placeShip(ship, [2, 0]);

  const spy = jest.spyOn(ship, 'hit');
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.grid[0][0]).toBe(HIT);
  // expect(spy).toHaveBeenCalledTimes(1);
});

test('Gameboard checks whether a cell has been attacked', () => {
  const gameboard = new Gameboard();
  const ship = new Ship({ length: 3 });
  gameboard.placeShip(ship, [2, 0]);

  gameboard.receiveAttack([0, 1]);
  gameboard.receiveAttack([1, 0]);

  expect(gameboard.hasBeenAttacked([0, 0])).toBeFalsy();
  expect(gameboard.hasBeenAttacked([0, 1])).toBeTruthy();
  expect(gameboard.hasBeenAttacked([1, 0])).toBeTruthy();
});

test('Gameboard increases a number of sunk ships', () => {
    const gameboard = new Gameboard();
    const ship = new Ship({ length: 3 });
    gameboard.placeShip(ship, [2, 0]);

    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([1, 0]);
    gameboard.receiveAttack([2, 0]);

    expect(gameboard.sunkShips.length).toBe(1);
});

test('Gameboard class checks whether coordinates is within the grid', () => {
  const coordinates1 = [0, 9];
  const coordinates2 = [5, 5];
  const coordinates3 = [9, 0];
  const coordinates4 = [10, 0];
  const coordinates5 = [-1, 0];

  expect(Gameboard.isOnBoard(coordinates1)).toBeTruthy();
  expect(Gameboard.isOnBoard(coordinates2)).toBeTruthy();
  expect(Gameboard.isOnBoard(coordinates3)).toBeTruthy();

  expect(Gameboard.isOnBoard(coordinates4)).toBeFalsy();
  expect(Gameboard.isOnBoard(coordinates5)).toBeFalsy();
});

test('Gameboard allows to place a ship if it fits on board and adj cells are free', () => {
  const gameboard = new Gameboard();

  expect(gameboard.canPlaceShip(5, [6, 4], true)).toBeTruthy();
  expect(gameboard.canPlaceShip(5, [6, 5], false)).toBeTruthy();
});

test('Gameboard allows to place a ship in the corner of the board', () => {
  const gameboard = new Gameboard();

  expect(gameboard.canPlaceShip(5, [4, 0], true)).toBeTruthy();
  expect(gameboard.canPlaceShip(5, [0, 0], false)).toBeTruthy();
});

test('Gameboard does not allow to place a ship if it does not fit into the board', () => {
  const gameboard = new Gameboard();

  expect(gameboard.canPlaceShip(5, [3, 0], true)).toBeFalsy();
  expect(gameboard.canPlaceShip(2, [0, 0], true)).toBeFalsy();

  expect(gameboard.canPlaceShip(5, [0, 6], false)).toBeFalsy();
  expect(gameboard.canPlaceShip(2, [9, 9], false)).toBeFalsy();
});

test('Gameboard does not allow to place a ship if it overlaps another ship', () => {
  const gameboard = new Gameboard();

  gameboard.placeShip(new Ship({ length: 3, name: 'Cruiser'}), [2, 0], true)

  expect(gameboard.canPlaceShip(3, [1, 0], false)).toBeFalsy();
  expect(gameboard.canPlaceShip(5, [7, 0], true)).toBeFalsy();
});

test('Gameboard does not allow to place a ship if it is in the adjacent cells of another ship', () => {
  const gameboard = new Gameboard();

  gameboard.placeShip(new Ship({ length: 5, name: 'Carrier'}), [1, 4], false)

  expect(gameboard.canPlaceShip(3, [4, 5], true)).toBeFalsy();
  expect(gameboard.canPlaceShip(2, [1, 2], false)).toBeFalsy();
});
