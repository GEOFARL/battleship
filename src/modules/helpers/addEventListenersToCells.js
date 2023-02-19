import dropShip from './dropShip';

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragLeave(e) {
  e.target.classList.remove('drag-over');
}

export default function addEventListenersToCells(cells, player, placedShips) {
  cells.forEach((cell) => {
    cell.addEventListener('dragenter', dragEnter);
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('dragleave', dragLeave);
    cell.addEventListener('drop', (e) => dropShip(e, player, placedShips, cells));
  });
}
