import setUpShipDragging from './helpers/setUpShipDragging';
import setUpResetBtn from './helpers/setUpResetBtn';
import setUpRandomizeButton from './helpers/setUpRandomizeBtn';
import setUpCells from './helpers/setUpCells';
import Player from './Player';

const player = new Player();
export default player;
const placedShips = [];

setUpCells(player, placedShips);
setUpShipDragging();
setUpResetBtn(player, placedShips);
setUpRandomizeButton(player, placedShips);

// document.addEventListener('click', () => { console.log(placedShips, player); });
