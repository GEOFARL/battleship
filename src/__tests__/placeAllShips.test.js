import placeAllShips from "../modules/helpers/placeAllShips";
import getRandomPos from "../modules/helpers/getRandomPos";
import placeShipDOM from "../modules/helpers/placeShipDOM";

jest.mock('../modules/helpers/getRandomPos', () => jest.fn()
  .mockReturnValueOnce({ x: 4, y: 4, isHorizontal: true })
  .mockReturnValueOnce({ x: 8, y: 6, isHorizontal: false }));
jest.mock('../modules/helpers/placeShipDOM', () => jest.fn().mockReturnValue(Promise.resolve('data')));

describe('placeAllShips', () => {
  it('should place all ships on the gameboard', async () => {
    const gameboard = {
      canPlaceShip: jest.fn().mockReturnValue(true),
      placeShip: jest.fn(),
    };
    const ships = [{ length: 2 }, { length: 3 }];
    const placedShips = 0;

    await placeAllShips.call({ gameboard, placedShips }, ships);

    expect(gameboard.canPlaceShip).toHaveBeenCalledWith(2, [4, 4], true);
    expect(gameboard.canPlaceShip).toHaveBeenCalledWith(3, [8, 6], false);
    expect(gameboard.placeShip).toHaveBeenCalledWith(ships[0], [4, 4], true);
    expect(gameboard.placeShip).toHaveBeenCalledWith(ships[1], [8, 6], false);
    expect(getRandomPos).toHaveBeenCalledTimes(2);
    expect(placeShipDOM).toHaveBeenCalledWith(0, { gameboard, placedShips });
    expect(placeShipDOM).toHaveBeenCalledWith(1, { gameboard, placedShips });
  });
});
