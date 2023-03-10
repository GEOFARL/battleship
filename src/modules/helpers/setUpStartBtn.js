import { player } from '../Game';
import placeAllShipsOnBoard from './placeAllShipsOnBoard';
import cleanShip from './cleanShip';
import setUpComputerBoard from './setUpComputerBoard';

function startGame() {
  const startScreen = document.querySelector('.starting-screen');
  startScreen.classList.add('removed');
  setTimeout(() => {
    startScreen.style.display = 'none';
    placeAllShipsOnBoard(player, [], '.game-field__player .board__cell');
    cleanShip();
    setUpComputerBoard();
  }, 1000);
}

export function addStartButton() {
  const startScreen = document.querySelector('.starting-screen');
  if (!startScreen.querySelector('.new-game')) {
    const btn = document.createElement('button');
    btn.classList.add('btn-primary', 'new-game');
    btn.innerText = 'New Game';

    btn.addEventListener('click', startGame);

    document.querySelector('.ship-picker').style.display = 'none';
    document.querySelector('.starting-screen__main-container').appendChild(btn);
  }
}

export function removeStartButton() {
  if (document.querySelector('.starting-screen .new-game')) {
    const btn = document.querySelector('.new-game');
    btn.classList.add('removed');
    setTimeout(() => btn.remove(), 1000);
  }
}
