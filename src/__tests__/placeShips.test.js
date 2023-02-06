import getRandomPos from "../modules/helpers/getRandomPos";
import placeAllShips from "../modules/helpers/placeAllShips";
import placeShipDOM from "../modules/helpers/placeShipDOM";
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

// jest.mock("../modules/helpers/getRandomPos.js", () => {
//   let count = 0;
//   return () => {
//       count += 1;
//       switch(count) {
//         case 1: return { x: 4, y: 4, isHorizontal: true };
//         case 2: return { x: 8, y: 6, isHorizontal: false };
//         default: return {};
//       }
//     }
// });

// jest.mock("../__mocks__/placeShipDOM.js");

// describe('placeAllShips', () => {
//   let gameboard;

//   beforeEach(() => {
//     gameboard = {
//       placedShips: 0,
//       canPlaceShip: jest.fn().mockReturnValue(true),
//       placeShip: jest.fn(),
//     };
//   });

//   it('places all ships on the gameboard', async () => {
//     const ships = [{ length: 2 }, { length: 3 }];
//     const result = await placeAllShips.call({ gameboard }, ships);
//     console.log(result)
//   });
// });
