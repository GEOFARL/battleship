import { GRID_SIZE, SHIPS } from './constants';
import player from './Game';
import Ship from './Ship';

let cells = [...document.querySelectorAll('.board__cell')];
let placedShips = [];

// GET ALL SHIPS ON THE BOARD
let shipEls = [...document.querySelectorAll('.ship')];

function setUpDragAndDrop(shipEl) {
  shipEl.addEventListener('dragstart', (e) => {
    // GET CURRENT SHIP
    const ship = e.target.closest('.ship');

    // TRANSFER ITS ID
    e.dataTransfer.setData('text/plain', ship.id);

    // HIDE AFTER DRAG EVENT STOPS
    setTimeout(() => {
      ship.classList.add('hide');
    }, 0);
  });
}

// MAKE EACH SHIP DRAGGABLE
shipEls.forEach((shipEl) => setUpDragAndDrop(shipEl));

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragLeave(e) {
  e.target.classList.remove('drag-over');
}

function getShipCoordinates(cell) {
  const index = Array.from(cells).indexOf(cell);
  const y = Math.floor(index / 10);
  const x = index % 10;
  return [x, y];
}

function rotateShip(e) {
  const boardCell = e.target.closest('.board__cell');
  const shipEl = e.target.closest('.ship');
  const [x, y] = getShipCoordinates(boardCell);
  const id = Number(boardCell.querySelector('.ship').getAttribute('id'));

  const newOrientation = shipEl.classList.contains('vertical');
  const shipLength = shipEl.children.length;

  player.gameboard.removeShip(id);

  if (player.gameboard.canPlaceShip(shipLength, [x, y], newOrientation)) {
    // ROTATE SHIP
    shipEl.classList.toggle('vertical');

    // GET IT BACK ON THE BOARD
    player.replaceShip(id, [x, y], newOrientation);
  } else {
    player.replaceShip(id, [x, y], !newOrientation);
  }
}

function startGame() {
  const startScreen = document.querySelector('.starting-screen');
  startScreen.classList.add('removed');
  setTimeout(() => { startScreen.style.display = 'none'; }, 1000);
}

function addStartButton() {
  if (!document.querySelector('.new-game')) {
    const btn = document.createElement('button');
    btn.classList.add('btn-primary', 'new-game');
    btn.innerText = 'New Game';

    btn.addEventListener('click', startGame);

    document.querySelector('.ship-picker').style.display = 'none';
    document.querySelector('.starting-screen__main-container').appendChild(btn);
  }
}

function removeStartButton() {
  if (document.querySelector('.new-game')) {
    const btn = document.querySelector('.new-game');
    btn.classList.add('removed');
    setTimeout(() => btn.remove(), 1000);
  }
}

function drop(e) {
  e.target.classList.remove('drag-over');

  const id = e.dataTransfer.getData('text/plain');
  const ship = document.getElementById(id);

  // REVEAL A SHIP
  ship.classList.remove('hide');

  // GET IT IN THE CORRECT POSITION
  ship.style.transform = 'rotate(180deg)';

  const shipLength = ship.children.length;
  const [oldX, oldY] = getShipCoordinates(ship.closest('.board__cell'));
  const [newX, newY] = getShipCoordinates(e.target);

  const isHorizontal = !ship.classList.contains('vertical');
  player.gameboard.removeShip(Number(id));

  if (player.gameboard.canPlaceShip(shipLength, [newX, newY], isHorizontal)) {
    e.target.appendChild(ship);
    ship.removeEventListener('click', rotateShip);
    ship.addEventListener('click', rotateShip);
    if (!placedShips.includes(ship)) {
      player.placeShip(Number(id), [newX, newY], isHorizontal);
      placedShips.push(ship);
    } else {
      player.moveShip(Number(id), [newX, newY], isHorizontal);
    }
  } else if (placedShips.includes(ship)) {
    player.replaceShip(Number(id), [oldX, oldY], isHorizontal);
  }
}

function addEventListenersToCells() {
  cells = [...document.querySelectorAll('.board__cell')];
  cells.forEach((cell) => {
    cell.addEventListener('dragenter', dragEnter);
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('dragleave', dragLeave);
    cell.addEventListener('drop', drop);
  });
}

addEventListenersToCells();

function resetAll(withButton = true) {
  placedShips = [];
  player.reset();
  const board = document.querySelector('.board');
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

  addEventListenersToCells();
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
  shipEls = [...document.querySelectorAll('.ship')];
  shipEls.forEach((shipEl) => setUpDragAndDrop(shipEl));
  if (withButton) {
    removeStartButton();
  }
}

const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', resetAll);

const randomizeBtn = document.querySelector('.random-btn');
randomizeBtn.addEventListener('click', () => {
  player.reset();
  resetAll(false);
  player.placeAllShipsAtOnce(SHIPS);
  for (let i = 0; i < GRID_SIZE; i += 1) {
    for (let j = 0; j < GRID_SIZE; j += 1) {
      if (player.gameboard.grid[i][j] instanceof Ship) {
        const rightSide = j + 1 >= GRID_SIZE
          || player.gameboard.grid[i][j + 1] === undefined
          || !(player.gameboard.grid[i][j + 1] instanceof Ship);

        const upSide = i - 1 < 0
          || player.gameboard.grid[i - 1][j] === undefined
          || !(player.gameboard.grid[i - 1][j] instanceof Ship);

        const downSide = i + 1 >= GRID_SIZE
          || player.gameboard.grid[i + 1][j] === undefined
          || !(player.gameboard.grid[i + 1][j] instanceof Ship);

        const leftSide = j - 1 < 0
          || player.gameboard.grid[i][j - 1] === undefined
          || !(player.gameboard.grid[i][j - 1] instanceof Ship);

        if (rightSide && upSide && downSide) {
          const shipEl = document.querySelector(`#\\3${player.gameboard.grid[i][j].id}`);
          shipEl.addEventListener('click', rotateShip);
          shipEl.style.transform = 'rotate(180deg)';
          const cellEl = cells[i * GRID_SIZE + j];
          cellEl.appendChild(shipEl);
        } else if (upSide && leftSide && rightSide) {
          const shipEl = document.querySelector(`#\\3${player.gameboard.grid[i][j].id}`);
          shipEl.addEventListener('click', rotateShip);
          shipEl.classList.toggle('vertical');
          shipEl.style.transform = 'rotate(180deg)';
          const cellEl = cells[i * GRID_SIZE + j];
          cellEl.appendChild(shipEl);
        }
      }
    }
  }
  addStartButton();
});
