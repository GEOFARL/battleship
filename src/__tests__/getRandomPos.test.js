import getRandomPos from "../modules/helpers/getRandomPos";
import { GRID_SIZE } from "../modules/constants";

describe('getRandomPos', () => {
  test('returns a valid position', () => {
    const result = getRandomPos();

    expect(result).toHaveProperty('x');
    expect(result.x).toBeGreaterThanOrEqual(0);
    expect(result.x).toBeLessThan(GRID_SIZE);

    expect(result).toHaveProperty('y');
    expect(result.y).toBeGreaterThanOrEqual(0);
    expect(result.y).toBeLessThan(GRID_SIZE);

    expect(result).toHaveProperty('isHorizontal');
    expect(typeof result.isHorizontal === 'boolean').toBeTruthy();
  });
});
