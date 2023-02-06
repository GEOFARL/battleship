import Computer from '../modules/Computer';
import Player from '../modules/Player';
import Gameboard from '../modules/Gameboard';
import getRandomPos from '../modules/helpers/getRandomPos';
import Ship from '../modules/Ship';
import { HIT, MISSED_SHOT } from '../modules/constants';

jest.mock('../modules/helpers/getRandomPos.js', () => jest.fn()
  .mockReturnValueOnce({ x: 3, y: 3, isHorizontal: false })
  .mockReturnValue({ x: 6, y: 6, isHorizontal: false })
);

describe('Computer', () => {
  const computer = new Computer()
  const player = new Player();
  const newBoard = new Gameboard()
  let hasBeenAttackedFn;
  
  beforeEach(() => {
    hasBeenAttackedFn = jest.fn()
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false);
    newBoard.hasBeenAttacked = hasBeenAttackedFn;
    player.gameboard = newBoard;
    player.gameboard.placeShip(new Ship({ length: 3, name: 'Submarine' }), [3, 3])
  });

  test('should have gameboard attribute', () => {
    expect(computer).toHaveProperty('gameboard');
  });

  test('should be able to attack randomly', () => {
    Computer.attackRandomly(player);
    Computer.attackRandomly(player);

    expect(hasBeenAttackedFn).toHaveBeenCalledTimes(3);
    expect(getRandomPos).toHaveBeenCalledTimes(3);
    expect(player.gameboard.grid[3][3]).toBe(HIT);
    expect(player.gameboard.grid[6][6]).toBe(MISSED_SHOT);
  });
});
