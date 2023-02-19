export default function getShipCoordinates(cell, allCells) {
  if (cell && allCells) {
    const index = Array.from(allCells).indexOf(cell);
    const y = Math.floor(index / 10);
    const x = index % 10;
    return [x, y];
  }
  return [null, null];
}
