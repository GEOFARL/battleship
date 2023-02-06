import Gameboard from '../Gameboard';

export default function attackEnemy(enemy, coordinates) {
  // If the specified coordinates has not
  // been attacked yet, attacks them and signifies
  // success with true. If is already attacked
  // returns false

  if (!enemy || !Gameboard.isOnBoard(coordinates)) {
    throw new Error('Unable to attack');
  }
  if (!enemy.gameboard.hasBeenAttacked(coordinates)) {
    enemy.gameboard.receiveAttack(coordinates);
    return true;
  }
  return false;
}
