import { GRID_SIZE, HIT } from '../constants';
import { player } from '../Game';
import Gameboard from '../Gameboard';
import Ship from '../Ship';

export default function findCell(coordinates) {
  const [x, y] = coordinates;
  let i = 0;
  let j = 0;
  let up = true;
  let right = true;
  while (up || right) {
    up = Gameboard.isOnBoard([(y + i - 1), x]);
    right = Gameboard.isOnBoard([y, (x + j + 1)]);
    if (up) {
      up = (player.gameboard.grid[y + i - 1][x] instanceof Ship
      || player.gameboard.grid[y + i - 1][x] === HIT);
    }
    if (right) {
      right = (player.gameboard.grid[y][x + j + 1] instanceof Ship
      || player.gameboard.grid[y][x + j + 1] === HIT);
    }
    i = up ? i - 1 : i;
    j = right ? j + 1 : j;
  }
  const offset = Math.max(Math.abs(i), j);
  const cell = [...document.querySelectorAll('.game-field__player .board__cell')][(y + i) * GRID_SIZE + (x + j)];
  const shipElCells = [...cell.querySelectorAll('.ship__cell')];
  return shipElCells[offset];
}
