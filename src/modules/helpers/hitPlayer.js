import { player } from '../Game';
import Computer from '../Computer';
import { GRID_SIZE, HIT_TIME } from '../constants';
import styleCell from './styleCell';
import findCell from './findCell';
import handleAdjZone from './handleAdjZone';

export default async function hitPlayer() {
  // const title = document.querySelector('.heading-secondary');
  // title.innerHTML = 'Computer\'s turn';
  // console.log(title);
  const [[x, y], ship] = Computer.attackRandomly(player);
  let cell = [...document.querySelectorAll('.game-field__player .board__cell')][y * GRID_SIZE + x];
  if (cell.firstElementChild) {
    cell = cell.querySelector('.ship__cell');
  }
  styleCell(cell);
  if (player.gameboard.isHit([x, y])) {
    if (!cell.classList.contains('ship__cell')) {
      cell = findCell([x, y]);
    }
    cell.innerHTML = '&#215;';
    cell.style.color = 'white';
    styleCell(cell);
    handleAdjZone([x, y], player, ship, '.game-field__player .board__cell');
    return new Promise((resolve) => {
      setTimeout(async () => {
        await hitPlayer();
        resolve(true);
      }, HIT_TIME);
    });
  }
  cell.innerHTML = '&#8226;';
  document.querySelector('body').style['pointer-events'] = 'auto';
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, HIT_TIME);
  });
}
