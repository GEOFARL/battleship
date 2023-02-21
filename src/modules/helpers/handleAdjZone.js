import { GRID_SIZE } from '../constants';
import Gameboard from '../Gameboard';
import attackEnemy from './attackEnemy';
import findShipHead from './findShipHead';
import getShipCoordinates from './getShipCoordinates';
import styleCell from './styleCell';

export default function handleAdjZone(coordinates, player, ship, boardSelector) {
  if (player.gameboard.sunkShips.includes(ship)) {
    const allCells = [...document.querySelectorAll(boardSelector)];
    const [cell, horizontal] = findShipHead(coordinates, player, boardSelector);
    const [x, y] = getShipCoordinates(cell, allCells);
    let hitMark;
    if (horizontal) {
      let i = 0;
      let cellEl = allCells[y * GRID_SIZE + x + 1];
      if (cellEl && Gameboard.isOnBoard([x + 1, y])) {
        if (!cellEl.firstElementChild) {
          hitMark = document.createElement('div');
          styleCell(hitMark);
          attackEnemy(player, [x + 1, y]);
          hitMark.innerHTML = '&#8226;';
          cellEl.appendChild(hitMark);
        }
      }

      while (i < ship.length + 2) {
        cellEl = allCells[(y - 1) * GRID_SIZE + x + 1 - i];
        if (cellEl && Gameboard.isOnBoard([x + 1 - i, (y - 1)])) {
          if (!cellEl.firstElementChild) {
            hitMark = document.createElement('div');
            styleCell(hitMark);
            attackEnemy(player, [x + 1 - i, y - 1]);
            hitMark.innerHTML = '&#8226;';
            cellEl.appendChild(hitMark);
          }
        }

        cellEl = allCells[(y + 1) * GRID_SIZE + x + 1 - i];
        if (cellEl && Gameboard.isOnBoard([x + 1 - i, (y + 1)])) {
          if (!cellEl.firstElementChild) {
            hitMark = document.createElement('div');
            styleCell(hitMark);
            attackEnemy(player, [x + 1 - i, y + 1]);
            hitMark.innerHTML = '&#8226;';
            cellEl.appendChild(hitMark);
          }
        }

        i += 1;
      }

      cellEl = allCells[y * GRID_SIZE + x + 2 - i];
      if (cellEl && Gameboard.isOnBoard([x + 2 - i, y])) {
        if (!cellEl.firstElementChild) {
          hitMark = document.createElement('div');
          styleCell(hitMark);
          attackEnemy(player, [x + 2 - i, y]);
          hitMark.innerHTML = '&#8226;';
          cellEl.appendChild(hitMark);
        }
      }
    } else {
      let i = 0;
      let cellEl = allCells[(y - 1) * GRID_SIZE + x];
      if (cellEl && Gameboard.isOnBoard([x, y - 1])) {
        if (!cellEl.firstElementChild) {
          hitMark = document.createElement('div');
          styleCell(hitMark);
          attackEnemy(player, [x, y - 1]);
          hitMark.innerHTML = '&#8226;';
          cellEl.appendChild(hitMark);
        }
      }

      while (i < ship.length + 2) {
        cellEl = allCells[(y - 1 + i) * GRID_SIZE + x + 1];
        if (cellEl && Gameboard.isOnBoard([x + 1, y - 1 + i])) {
          if (!cellEl.firstElementChild) {
            hitMark = document.createElement('div');
            styleCell(hitMark);
            attackEnemy(player, [x + 1, y - 1 + i]);
            hitMark.innerHTML = '&#8226;';
            cellEl.appendChild(hitMark);
          }
        }

        cellEl = allCells[(y - 1 + i) * GRID_SIZE + x - 1];
        if (cellEl && Gameboard.isOnBoard([x - 1, (y - 1 + i)])) {
          if (!cellEl.firstElementChild) {
            hitMark = document.createElement('div');
            styleCell(hitMark);
            attackEnemy(player, [x - 1, y - 1 + i]);
            hitMark.innerHTML = '&#8226;';
            cellEl.appendChild(hitMark);
          }
        }

        i += 1;
      }

      cellEl = allCells[(y + i - 2) * GRID_SIZE + x];
      if (cellEl && Gameboard.isOnBoard([x, y + i - 2])) {
        if (!cellEl.firstElementChild) {
          hitMark = document.createElement('div');
          styleCell(hitMark);
          attackEnemy(player, [x, y + i - 2]);
          hitMark.innerHTML = '&#8226;';
          cellEl.appendChild(hitMark);
        }
      }
    }
  }
}
