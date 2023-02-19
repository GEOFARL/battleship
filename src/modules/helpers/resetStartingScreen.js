import setUpShipDragging from './setUpShipDragging';
import addEventListenersToCells from './addEventListenersToCells';
import { removeStartButton } from './setUpStartBtn';

export default function resetStartingScreen(player, placedShips, withButton = true) {
  placedShips.splice(0, placedShips.length);
  player.reset();
  const board = document.querySelector('.starting-screen__main-container .board');
  board.innerHTML = `<div class="board__symbol"></div>
          <div class="board__symbol">A</div>
          <div class="board__symbol">B</div>
          <div class="board__symbol">C</div>
          <div class="board__symbol">D</div>
          <div class="board__symbol">E</div>
          <div class="board__symbol">F</div>
          <div class="board__symbol">G</div>
          <div class="board__symbol">H</div>
          <div class="board__symbol">I</div>
          <div class="board__symbol">G</div>

          <div class="board__symbol">1</div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>

          <div class="board__symbol">2</div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>

          <div class="board__symbol">3</div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>

          <div class="board__symbol">4</div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>

          <div class="board__symbol">5</div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>

          <div class="board__symbol">6</div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>

          <div class="board__symbol">7</div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>

          <div class="board__symbol">8</div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>

          <div class="board__symbol">9</div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>

          <div class="board__symbol">10</div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>
          <div class="board__cell"></div>`;

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
