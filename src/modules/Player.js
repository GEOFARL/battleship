import Gameboard from './Gameboard';
import placeAllShips from './helpers/placeAllShips';
import attackEnemy from './helpers/attackEnemy';

export default class Player {
  constructor() {
    this.gameboard = new Gameboard();
    this.placedShips = 0;
  }

  placeAllShips = placeAllShips;

  static attackEnemy = attackEnemy;
}
