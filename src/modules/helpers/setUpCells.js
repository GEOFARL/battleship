import addEventListenersToCells from './addEventListenersToCells';

export default function setUpCells(player, placedShips) {
  const cells = [...document.querySelectorAll('.starting-screen__main-container .board__cell')];
  addEventListenersToCells(cells, player, placedShips);
}
