const MISSED_SHOT = 0;
const HIT = 1;

export default class Gameboard {
  constructor() {
    this.grid = [...new Array(8)].map(() => [...new Array(8)].fill(null));
    this.ships = [];
    this.sunkShips = 0;
  }

  placeShip(ship, x, y, horizontal = true) {
    this.ships.push(ship);
    for (let i = 0; i < ship.length; i += 1) {
      if (horizontal) {
        this.grid[y][x + i] = ship;
      } else {
        this.grid[y + i][x] = ship;
      }
    }
  }

  receiveAttack(x, y) {
    if (this.grid[y][x] === null) {
      this.grid[y][x] = MISSED_SHOT;
    } else {
      this.grid[y][x].hit();
      if (this.grid[y][x].isSunk()) {
        this.sunkShips += 1;
      }
      this.grid[y][x] = HIT;
    }
  }

  hasBeenAttacked(x, y) {
    return this.grid[y][x] === MISSED_SHOT || this.grid[y][x] === HIT;
  }
}
