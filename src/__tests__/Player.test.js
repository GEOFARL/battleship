import Player from "../modules/Player";
import Gameboard from "../modules/Gameboard";

describe('Player have properties and methods', () => {
  test('Player should have a gameboard', () => {
    const player = new Player()
    const gameboard = new Gameboard()

    expect(player).toHaveProperty('gameboard')
    expect(player.gameboard).toStrictEqual(gameboard);
  });

  test('Player should be able to attackEnemy', () => {
    expect(Player).toHaveProperty('attackEnemy');
  });
});