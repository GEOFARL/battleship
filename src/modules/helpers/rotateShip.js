import getShipCoordinates from './getShipCoordinates';
import player from '../Game';

export default function rotateShip(e) {
  const allCells = [...document.querySelectorAll('.starting-screen__main-container .board__cell')];
  const boardCell = e.target.closest('.board__cell');
  const shipEl = e.target.closest('.ship');
  const [x, y] = getShipCoordinates(boardCell, allCells);
  const id = Number(boardCell.querySelector('.ship').getAttribute('id'));

  const newOrientation = shipEl.classList.contains('vertical');
  const shipLength = shipEl.children.length;

  player.gameboard.removeShip(id);

  if (player.gameboard.canPlaceShip(shipLength, [x, y], newOrientation)) {
    // ROTATE SHIP
    shipEl.classList.toggle('vertical');

    // GET IT BACK ON THE BOARD
    player.replaceShip(id, [x, y], newOrientation);
  } else {
    player.replaceShip(id, [x, y], !newOrientation);
  }
}
