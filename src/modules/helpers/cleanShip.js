import rotateShip from './rotateShip';

export default function cleanShip() {
  const allShips = [...document.querySelectorAll('.ship')];
  allShips.forEach((ship) => {
    ship.removeAttribute('draggable');
    ship.removeEventListener('click', rotateShip);
    ship.style.cursor = 'default';
  });
}
