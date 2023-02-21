import { GRID_SIZE, MISSED_SHOT, HIT } from './constants';
import Ship from './Ship';

export default class Gameboard {
  constructor() {
    this.grid = [...new Array(GRID_SIZE)].map(() => [...new Array(GRID_SIZE)].fill(null));
    this.ships = [];
    this.sunkShips = [];
  }

  placeShip(ship, coordinates, horizontal = true) {
    const { length, name, id } = { ...ship };
    const uniqueShip = new Ship({ length, name, id });
    const [x, y] = coordinates;
    if (!this.ships.includes(uniqueShip)) {
      this.ships.push(uniqueShip);
    }
    for (let i = 0; i < uniqueShip.length; i += 1) {
      if (horizontal) {
        this.grid[y][x - i] = uniqueShip;
      } else {
        this.grid[y + i][x] = uniqueShip;
      }
    }
  }

  receiveAttack(coordinates) {
    const [x, y] = coordinates;
    if (this.grid[y][x] === null) {
      this.grid[y][x] = MISSED_SHOT;
    } else if (this.grid[y][x] !== HIT) {
      this.grid[y][x].hit();
      if (this.grid[y][x].isSunk()) {
        if (!this.sunkShips.includes(this.grid[y][x])) {
          this.sunkShips.push(this.grid[y][x]);
        }
      }
      this.grid[y][x] = HIT;
    }
  }

  hasBeenAttacked(coordinates) {
    const [x, y] = coordinates;
    return this.grid[y][x] === MISSED_SHOT || this.grid[y][x] === HIT;
  }

  canPlaceShip(shipLength, startingCoordinates, isHorizontal) {
    const [startX, startY] = startingCoordinates;

    for (let i = 0; i < shipLength; i += 1) {
      const x = isHorizontal ? startX - i : startX;
      const y = isHorizontal ? startY : startY + i;

      if (!Gameboard.isOnBoard([x, y])) {
        return false;
      }

      for (let dx = -1; dx <= 1; dx += 1) {
        for (let dy = -1; dy <= 1; dy += 1) {
          const adjX = x + dx;
          const adjY = y + dy;

          if (Gameboard.isOnBoard([adjX, adjY]) && !this.isFree([adjX, adjY])) {
            return false;
          }
        }
      }
    }
    return true;
  }

  static isOnBoard(coordinates) {
    const [x, y] = coordinates;
    return x > -1
      && x < GRID_SIZE
      && y > -1
      && y < GRID_SIZE;
  }

  isFree(coordinates) {
    const [x, y] = coordinates;
    return this.grid[y][x] === null;
  }

  isHit(coordinates) {
    const [x, y] = coordinates;
    return this.grid[y][x] === HIT;
  }

  removeShip(id) {
    this.grid = this.grid.map((row) => row.map((cell) => {
      if (!(cell instanceof Ship)) return cell;
      if (cell.id === Number(id)) return null;
      return cell;
    }));
  }

  resetBoard() {
    this.grid = [...new Array(GRID_SIZE)].map(() => [...new Array(GRID_SIZE)].fill(null));
    this.ships = [];
  }
}
