import { addStartButton } from './setUpStartBtn';

function setUpDragAndDrop(shipEl) {
  shipEl.addEventListener('dragstart', (e) => {
    // GET CURRENT SHIP
    const ship = e.target.closest('.ship');

    // TRANSFER ITS ID
    e.dataTransfer.setData('text/plain', ship.id);

    // HIDE AFTER DRAG EVENT STOPS
    setTimeout(() => {
      ship.classList.add('hide');
    }, 0);
  });

  shipEl.addEventListener('dragend', (e) => {
    const ship = e.target.closest('.ship');
    ship.classList.remove('hide');

    const leftShips = [...document.querySelector('.ship-picker').childNodes].filter((node) => node.tagName === 'DIV');
    if (leftShips.length === 0) {
      addStartButton();
    }
  });
}

export default function setUpShipDragging() {
  // GET ALL SHIPS ON THE BOARD
  const shipEls = [...document.querySelectorAll('.ship')];

  // MAKE EACH SHIP DRAGGABLE
  shipEls.forEach((shipEl) => setUpDragAndDrop(shipEl));
}
