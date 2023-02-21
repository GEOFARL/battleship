import Gameboard from './Gameboard';
import placeAllShipsAtOnce from './helpers/placeAllShipsAtOnce';
import getRandomPos from './helpers/getRandomPos';

export default class Computer {
  constructor() {
    this.gameboard = new Gameboard();
  }

  placeAllShipsAtOnce = placeAllShipsAtOnce;

  static attackRandomly(enemy) {
    let ship;
    let x;
    let y;
    try {
      ({ x, y } = getRandomPos());
      while (enemy.gameboard.hasBeenAttacked([x, y])) {
        ({ x, y } = getRandomPos());
      }
      ship = enemy.gameboard.grid[y][x];
      enemy.gameboard.receiveAttack([x, y]);
    } catch (err) {
      console.log(err.message);
    }
    return [[x, y], ship];
  }
}
