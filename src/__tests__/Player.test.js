import Player from "../modules/Player";
import Gameboard from "../modules/Gameboard";
import { SHIPS } from "../modules/constants";

describe('Player have properties and methods', () => {
  test('Player should have a gameboard', () => {
    const player = new Player()
    const gameboard = new Gameboard()

    expect(player).toHaveProperty('gameboard')
    expect(player.gameboard).toStrictEqual(gameboard);
  });

  test('Player should be able to placeShips', () => {
    const player = new Player();

    expect(player).toHaveProperty('placeAllShips');
  });

  test('Player should be able to attackEnemy', () => {
    const player = new Player();
    expect(Player).toHaveProperty('attackEnemy');
  });
});