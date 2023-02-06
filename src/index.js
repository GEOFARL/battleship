import './sass/main.scss';
import './template.html';
import Player from './modules/Player';
import { SHIPS } from './modules/constants';

const player = new Player();
const enemy = new Player();
(async () => {
  await player.placeAllShips(SHIPS).then(() => console.log('Placed all our ships'));
  await enemy.placeAllShips(SHIPS).then(() => console.log('Placed all enemy ships'));
  for (let i = 0; i < 10; i += 1) {
    Player.attackEnemy(enemy, [i, i]);
  }
})();
console.log(player);
console.log(enemy);
