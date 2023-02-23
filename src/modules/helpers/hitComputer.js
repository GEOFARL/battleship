import { HIT_TIME } from '../constants';
import { computer } from '../Game';
import attackEnemy from './attackEnemy';
import getShipCoordinates from './getShipCoordinates';
import hitPlayer from './hitPlayer';
import styleCell from './styleCell';
import handleAdjZone from './handleAdjZone';
import setUpEndWindow from './setUpEndWindow';
import addSunkShipMark from './addSunkShipMark';

export default function hitComputer(e) {
  const cell = e.target;
  const hitMark = document.createElement('div');
  cell.appendChild(hitMark);
  styleCell(hitMark);
  // styleCell(cell);

  const coordinates = getShipCoordinates(cell, [...document.querySelectorAll('.game-field__computer .board__cell')]);
  const ship = computer.gameboard.grid[coordinates[1]][coordinates[0]];

  if (attackEnemy(computer, coordinates)) {
    if (computer.gameboard.isHit(coordinates)) {
      hitMark.innerHTML = '&#215;';
      // cell.innerHTML = '&#215;';
      handleAdjZone(coordinates, computer, ship, '.game-field__computer .board__cell');

      if (ship.isSunk()) {
        addSunkShipMark(ship.length, '.remaining-ships--computer');
      }
    } else {
      hitMark.innerHTML = '&#8226;';
      // cell.innerHTML = '&#8226;';
      document.querySelector('body').style['pointer-events'] = 'none';
      const title = document.querySelector('.heading-secondary');
      title.innerHTML = 'Computer\'s turn';
      setTimeout(() => {
        hitPlayer().then(() => {
          title.innerHTML = 'Your turn';
        });
      }, HIT_TIME);
    }

    if (computer.gameboard.isGameOver()) {
      setUpEndWindow('player');
    }
  }
}
