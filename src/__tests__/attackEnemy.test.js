import attackEnemy from "../modules/helpers/attackEnemy";
import Player from "../modules/Player";
import { MISSED_SHOT } from "../modules/constants";

test('Should return true and attack an enemy if a coordinate has not been attacked', () => {
  const player = new Player();
  expect(attackEnemy(player, [0, 0])).toBeTruthy();
  expect(player.gameboard.grid[0][0]).toBe(MISSED_SHOT);
});

test('Should return false and not attack an enemy if a coordinate has been already attacked', () => {
  const player = new Player();
  attackEnemy(player, [0, 0])
  expect(attackEnemy(player, [0, 0])).toBeFalsy();
  expect(player.gameboard.grid[0][0]).toBe(MISSED_SHOT);
});

test('Should throw an error on invalid arguments', () => {
  const player = new Player();
  expect(() => {
    attackEnemy(player, [-1, 2])
  }).toThrow();
  expect(() => {
    attackEnemy(undefined, [0, 0])
  }).toThrow();
});