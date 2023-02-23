export default function addSunkShipMark(length, selector) {
  const remainingShipsEl = [...document.querySelector(selector).childNodes].filter((node) => node.tagName === 'DIV').reverse();
  const shipEl = remainingShipsEl.find((ship) => {
    const shipCells = [...ship.childNodes].filter((node) => node.tagName === 'DIV');
    if (shipCells.length !== length || ship.classList.contains('sunk')) {
      return false;
    }
    return true;
  });
  shipEl.classList.add('sunk');
}
