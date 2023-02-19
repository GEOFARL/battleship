import { GRID_SIZE } from '../constants';
import rotateShip from './rotateShip';
import Ship from '../Ship';

export default function placeAllShipsOnBoard(player, placedShips) {
  const cells = [...document.querySelectorAll('.starting-screen__main-container .board__cell')];
  for (let i = 0; i < GRID_SIZE; i += 1) {
    for (let j = 0; j < GRID_SIZE; j += 1) {
      if (player.gameboard.grid[i][j] instanceof Ship) {
        const rightSide = j + 1 >= GRID_SIZE
          || player.gameboard.grid[i][j + 1] === undefined
          || !(player.gameboard.grid[i][j + 1] instanceof Ship);

        const upSide = i - 1 < 0
          || player.gameboard.grid[i - 1][j] === undefined
          || !(player.gameboard.grid[i - 1][j] instanceof Ship);

        const downSide = i + 1 >= GRID_SIZE
          || player.gameboard.grid[i + 1][j] === undefined
          || !(player.gameboard.grid[i + 1][j] instanceof Ship);

        const leftSide = j - 1 < 0
          || player.gameboard.grid[i][j - 1] === undefined
          || !(player.gameboard.grid[i][j - 1] instanceof Ship);

        if (rightSide && upSide && downSide) {
          const shipEl = document.querySelector(`#\\3${player.gameboard.grid[i][j].id}`);
          shipEl.addEventListener('click', rotateShip);
          shipEl.style.transform = 'rotate(180deg)';
          const cellEl = cells[i * GRID_SIZE + j];
          cellEl.appendChild(shipEl);
          placedShips.push(shipEl);
        } else if (upSide && leftSide && rightSide) {
          const shipEl = document.querySelector(`#\\3${player.gameboard.grid[i][j].id}`);
          shipEl.addEventListener('click', rotateShip);
          shipEl.classList.toggle('vertical');
          shipEl.style.transform = 'rotate(180deg)';
          const cellEl = cells[i * GRID_SIZE + j];
          cellEl.appendChild(shipEl);
          placedShips.push(shipEl);
        }
      }
    }
  }
}
