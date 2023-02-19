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
  });
}

export default function setUpShipDragging() {
  // GET ALL SHIPS ON THE BOARD
  const shipEls = [...document.querySelectorAll('.ship')];

  // MAKE EACH SHIP DRAGGABLE
  shipEls.forEach((shipEl) => setUpDragAndDrop(shipEl));
}
