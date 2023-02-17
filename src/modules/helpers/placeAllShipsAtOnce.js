import getRandomPos from './getRandomPos';

export default function placeAllShipsAtOnce(ships) {
  ships.forEach((ship) => {
    try {
      let { x, y, isHorizontal } = getRandomPos();
      while (!this.gameboard.canPlaceShip(ship.length, [x, y], isHorizontal)) {
        ({ x, y, isHorizontal } = getRandomPos());
      }
      this.gameboard.placeShip(ship, [x, y], isHorizontal);
      this.placedShips += 1;
    } catch (err) {
      console.log(err.message);
    }
  });
}
