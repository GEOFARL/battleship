import Gameboard from './Gameboard';
import placeAllShipsAtOnce from './helpers/placeAllShipsAtOnce';
import attackEnemy from './helpers/attackEnemy';
import { SHIPS } from './constants';

export default class Player {
  constructor() {
    this.gameboard = new Gameboard();
    this.placedShips = 0;
  }

  placeAllShipsAtOnce = placeAllShipsAtOnce;
  // placeAllShips = placeAllShips;

  placeShip(id, coordinates, isHorizontal) {
    const ship = SHIPS.find((s) => s.id === Number(id));
    this.placedShips += 1;
    this.gameboard.placeShip(ship, coordinates, isHorizontal);
  }

  moveShip(id, coordinates, isHorizontal) {
    this.gameboard.removeShip(id);
    this.replaceShip(id, coordinates, isHorizontal);
  }

  replaceShip(id, coordinates, isHorizontal) {
    const ship = this.gameboard.ships.find((sh) => sh.id === Number(id));
    this.gameboard.placeShip(ship, coordinates, isHorizontal);
  }

  reset() {
    this.gameboard.resetBoard();
    this.placedShips = 0;
  }

  static attackEnemy = attackEnemy;
}
