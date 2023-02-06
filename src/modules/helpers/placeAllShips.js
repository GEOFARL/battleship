import getRandomPos from './getRandomPos';
import placeShipDOM from './placeShipDOM';

export default async function placeAllShips(ships) {
  // Queue all the placements of the ships
  const shipPlacements = ships.map(async (ship, index) => {
    // TODO: GET data from the DOM
    try {
      // Waiting for a placement
      await placeShipDOM(index, this);
      Promise.resolve(setTimeout(() => { this.placedShips += 1; }, 0));
      let { x, y, isHorizontal } = getRandomPos();
      while (!this.gameboard.canPlaceShip(ship.length, [x, y], isHorizontal)) {
        /* eslint-disable */
        ({ x, y, isHorizontal } = getRandomPos());
        /* eslint-enable */
      }
      this.gameboard.placeShip(ship, [x, y], isHorizontal);
      console.log(this);
    } catch (err) {
      console.log(err.message);
    }
  });
  await Promise.all(shipPlacements);
}

export function placeAllShipsAtOnce(ships) {
  ships.forEach((ship) => {
    try {
      let { x, y, isHorizontal } = getRandomPos();
      while (!this.gameboard.canPlaceShip(ship.length, [x, y], isHorizontal)) {
        ({ x, y, isHorizontal } = getRandomPos());
      }
      this.gameboard.placeShip(ship, [x, y], isHorizontal);
    } catch (err) {
      console.log(err.message);
    }
  });
}
