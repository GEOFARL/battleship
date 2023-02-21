import { GRID_SIZE, HIT } from '../constants';
import Gameboard from '../Gameboard';
import Ship from '../Ship';

export default function findShipHead(coordinates, player, boardSelector) {
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

  let horizontal = true;
  up = Gameboard.isOnBoard([y + i + 1, x + j]);
  if (up) {
    horizontal = !(player.gameboard.grid[y + i + 1][x + j] instanceof Ship
      || player.gameboard.grid[y + i + 1][x + j] === HIT);
  }
  return [[...document.querySelectorAll(boardSelector)][(y + i) * GRID_SIZE + (x + j)], horizontal];
}
