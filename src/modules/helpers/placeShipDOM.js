export default function placeShipDOM(shipIndex, obj) {
  return new Promise((resolve) => {
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
      if (shipIndex === obj.placedShips) {
        resolve((btn.getAttribute('data')));
      }
    });
  });
}
