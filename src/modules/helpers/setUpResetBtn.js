import resetStartingScreen from './resetStartingScreen';

function returnGrid() {
  setTimeout(() => { document.querySelector('.ship-picker').style.display = 'grid'; }, 1000);
}

export default function setUpResetBtn(player, placedShips) {
  const resetBtn = document.querySelector('.reset-btn');
  resetBtn.addEventListener('click', () => {
    resetStartingScreen(player, placedShips, true);
    returnGrid();
  });
}
