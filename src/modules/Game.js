import setUpShipDragging from './helpers/setUpShipDragging';
import setUpResetBtn from './helpers/setUpResetBtn';
import setUpRandomizeButton from './helpers/setUpRandomizeBtn';
import setUpCells from './helpers/setUpCells';
import Player from './Player';
import Computer from './Computer';
import { SHIPS } from './constants';

const player = new Player();
const computer = new Computer();
computer.placeAllShipsAtOnce(SHIPS);
export { player, computer };
const placedShips = [];

setUpCells(player, placedShips);
setUpShipDragging();
setUpResetBtn(player, placedShips);
setUpRandomizeButton(player, placedShips);

// document.addEventListener('click', () => { console.log(placedShips, player, computer); });
