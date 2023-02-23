import setUpShipDragging from './helpers/setUpShipDragging';
import setUpResetBtn from './helpers/setUpResetBtn';
import setUpRandomizeButton from './helpers/setUpRandomizeBtn';
import setUpCells from './helpers/setUpCells';
import Player from './Player';
import Computer from './Computer';
import { SHIPS } from './constants';
import resetStartingScreen from './helpers/resetStartingScreen';
import setUpRemainingShips from './helpers/setUpRemainingShips';

let player;
let computer;
let placedShips = [];

export default function setUpNewGame() {
  player = new Player();
  computer = new Computer();
  computer.placeAllShipsAtOnce(SHIPS);
  resetStartingScreen(player, placedShips, true);
  document.querySelector('.ship-picker').style.display = 'grid';
  placedShips = [];

  setUpRemainingShips();
  setUpCells(player, placedShips);
  setUpShipDragging();
  setUpResetBtn(player, placedShips);
  setUpRandomizeButton(player, placedShips);
}
setUpNewGame();
export { player, computer };

// document.addEventListener('click', () => { console.log(placedShips, player, computer); });
