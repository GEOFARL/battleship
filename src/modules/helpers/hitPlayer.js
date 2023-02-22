import { player } from '../Game';
import Computer from '../Computer';
import { GRID_SIZE, HIT_TIME } from '../constants';
import styleCell from './styleCell';
import findCell from './findCell';
import handleAdjZone from './handleAdjZone';
import Gameboard from '../Gameboard';
import setUpEndWindow from './setUpEndWindow';

let hits = [];
let possibleMoves = [];
let shipBeingAttacked = null;

export default async function hitPlayer() {
  console.log('Hits: ', [...hits], 'Possible moves', [...possibleMoves], shipBeingAttacked);
  let x;
  let y;
  let ship;
  if (shipBeingAttacked) {
    [x, y] = possibleMoves.shift();
    while (player.gameboard.hasBeenAttacked([x, y])) {
      [x, y] = possibleMoves.shift();
    }
    try {
      player.gameboard.receiveAttack([x, y]);
    } catch (err) {
      console.log('================================');
      console.log(err);
      console.log('Coordinates: ', [x, y]);
      console.log('================================');
    }
    ship = shipBeingAttacked;
    if (shipBeingAttacked.isSunk()) {
      hits = [];
      possibleMoves = [];
      shipBeingAttacked = null;
    } else if (player.gameboard.isHit([x, y])) {
      const [oldX, oldY] = hits.shift();
      let marginX = x - oldX;
      let marginY = y - oldY;
      if (Math.abs(marginX) > 1) {
        marginX = marginX > 0 ? -1 : 1;
      }
      if (Math.abs(marginY) > 1) {
        marginY = marginY > 0 ? -1 : 1;
      }
      const [newX, newY] = [x + marginX, y + marginY];
      console.log('NewX: ', newX, 'NewY: ', newY);
      if (Gameboard.isOnBoard([newX, newY])
        && !player.gameboard.hasBeenAttacked([newX, newY])
        && !possibleMoves.includes([newX, newY])) {
        possibleMoves.unshift([newX, newY]);
      }
    }
  } else {
    [[x, y], ship] = Computer.attackRandomly(player);
  }
  let cell = [...document.querySelectorAll('.game-field__player .board__cell')][y * GRID_SIZE + x];
  if (cell.firstElementChild) {
    cell = cell.querySelector('.ship__cell');
  }
  const hitMarkk = document.createElement('div');
  styleCell(hitMarkk);
  cell.appendChild(hitMarkk);
  if (player.gameboard.isHit([x, y])) {
    if (!cell.classList.contains('ship__cell')) {
      cell = findCell([x, y]);
    }
    if (!cell.firstElementChild) {
      const hitMark = document.createElement('div');
      cell.appendChild(hitMark);
      hitMark.innerHTML = '&#215;';
      hitMark.style.color = 'white';
      styleCell(hitMark);
    } else {
      cell.firstElementChild.innerHTML = '&#215;';
      cell.firstElementChild.style.color = 'white';
    }
    // cell.appendChild(hitMark);
    // hitMark.innerHTML = '&#215;';
    // hitMark.style.color = 'white';
    // // cell.innerHTML = '&#215;';
    // // cell.style.color = 'white';
    // styleCell(hitMark);
    // // styleCell(cell);
    handleAdjZone([x, y], player, ship, '.game-field__player .board__cell');
    if (!ship.isSunk()) {
      // Determine possible moves
      shipBeingAttacked = ship;
      hits.push([x, y]);
      if (Gameboard.isOnBoard([x, y + 1])
        && !player.gameboard.hasBeenAttacked([x, y + 1])
        && !possibleMoves.includes([x, y + 1])) {
        possibleMoves.push([x, y + 1]);
      }
      if (Gameboard.isOnBoard([x, y - 1])
        && !player.gameboard.hasBeenAttacked([x, y - 1])
        && !possibleMoves.includes([x, y - 1])) {
        possibleMoves.push([x, y - 1]);
      }
      if (Gameboard.isOnBoard([x + 1, y])
        && !player.gameboard.hasBeenAttacked([x + 1, y])
        && !possibleMoves.includes([x + 1, y])) {
        possibleMoves.push([x + 1, y]);
      }
      if (Gameboard.isOnBoard([x - 1, y])
        && !player.gameboard.hasBeenAttacked([x - 1, y])
        && !possibleMoves.includes([x - 1, y])) {
        possibleMoves.push([x - 1, y]);
      }
    }

    if (player.gameboard.isGameOver()) {
      setUpEndWindow('computer');
    }

    return new Promise((resolve) => {
      setTimeout(async () => {
        await hitPlayer();
        resolve(true);
      }, HIT_TIME);
    });
  }
  if (!cell.firstElementChild) {
    const hitMark = document.createElement('div');
    hitMark.innerHTML = '&#8226;';
    styleCell(hitMark);
    cell.appendChild(hitMark);
  } else {
    cell.firstElementChild.innerHTML = '&#8226;';
  }
  // cell.innerHTML = '&#8226;';
  document.querySelector('body').style['pointer-events'] = 'auto';
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, HIT_TIME);
  });
}
