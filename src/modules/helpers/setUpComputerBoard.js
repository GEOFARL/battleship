import hitComputer from './hitComputer';

export default function setUpComputerBoard() {
  const cells = [...document.querySelectorAll('.game-field__computer .board__cell')];
  cells.forEach((cell) => {
    cell.style.cursor = 'crosshair';
    cell.addEventListener('mouseover', () => {
      cell.classList.add('drag-over');
    });
    cell.addEventListener('mouseout', () => {
      cell.classList.remove('drag-over');
    });
    cell.addEventListener('click', hitComputer);
  });
}
