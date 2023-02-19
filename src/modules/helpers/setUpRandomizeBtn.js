import resetStartingScreen from './resetStartingScreen';
import placeAllShipsOnBoard from './placeAllShipsOnBoard';
import { addStartButton } from './setUpStartBtn';
import { SHIPS } from '../constants';

export default function setUpRandomizeButton(player, placedShips) {
  const randomizeBtn = document.querySelector('.random-btn');
  randomizeBtn.addEventListener('click', () => {
    resetStartingScreen(player, placedShips, false);
    player.placeAllShipsAtOnce(SHIPS);
    placeAllShipsOnBoard(player, placedShips);
    addStartButton();
  });
}
