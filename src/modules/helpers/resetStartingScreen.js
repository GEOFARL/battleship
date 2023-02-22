import setUpShipDragging from './setUpShipDragging';
import addEventListenersToCells from './addEventListenersToCells';
import { removeStartButton } from './setUpStartBtn';
import resetBoard from './resetBoard';

export default function resetStartingScreen(player, placedShips, withButton = true) {
  placedShips.splice(0, placedShips.length);
  player.reset();
  resetBoard('.starting-screen__main-container .board');

  const cells = [...document.querySelectorAll('.starting-screen__main-container .board__cell')];
  addEventListenersToCells(cells, player, placedShips);
  const shipPicker = document.querySelector('.ship-picker');
  shipPicker.innerHTML = `<div class="ship ship--5" id="7" draggable="true">
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
          </div>

          <div class="ship ship--4" id="6" draggable="true">
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
          </div>

          <div class="ship ship--3 ship--3-1" id="5" draggable="true">
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
          </div>

          <div class="ship ship--3 ship--3-2" id="4" draggable="true">
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
          </div>

          <div class="ship ship--2 ship--2-1" id="3" draggable="true">
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
          </div>

          <div class="ship ship--2 ship--2-2" id="2" draggable="true">
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
          </div>

          <div class="ship ship--2 ship--2-3" id="1" draggable="true">
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
          </div>`;
  setUpShipDragging();
  if (withButton) {
    removeStartButton();
  }
}
