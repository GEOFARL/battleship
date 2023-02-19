import getShipCoordinates from './getShipCoordinates';
import rotateShip from './rotateShip';

export default function dropShip(e, player, placedShips, cells) {
  e.target.classList.remove('drag-over');

  const id = e.dataTransfer.getData('text/plain');
  const ship = document.getElementById(id);

  // REVEAL A SHIP
  ship.classList.remove('hide');

  // GET IT IN THE CORRECT POSITION
  ship.style.transform = 'rotate(180deg)';

  const shipLength = ship.children.length;
  const [oldX, oldY] = getShipCoordinates(ship.closest('.board__cell'), cells);
  const [newX, newY] = getShipCoordinates(e.target, cells);

  const isHorizontal = !ship.classList.contains('vertical');
  player.gameboard.removeShip(Number(id));

  if (player.gameboard.canPlaceShip(shipLength, [newX, newY], isHorizontal)) {
    e.target.appendChild(ship);
    ship.removeEventListener('click', rotateShip);
    ship.addEventListener('click', rotateShip);
    if (!placedShips.includes(ship)) {
      player.placeShip(Number(id), [newX, newY], isHorizontal);
      placedShips.push(ship);
    } else {
      player.moveShip(Number(id), [newX, newY], isHorizontal);
    }
  } else if (placedShips.includes(ship)) {
    player.replaceShip(Number(id), [oldX, oldY], isHorizontal);
  }
}
