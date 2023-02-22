import setUpNewGame from '../Game';
import resetBoard from './resetBoard';

export default function setUpNewGameBtn() {
  const endScreen = document.querySelector('.end-screen');
  const startingScreen = document.querySelector('.starting-screen');
  endScreen.style.display = 'none';
  startingScreen.style.display = 'block';
  startingScreen.classList.remove('removed');

  resetBoard('.game-field__player .board');
  resetBoard('.game-field__computer .board');
  setUpNewGame();
}
