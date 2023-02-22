export default function resetBoard(boardSelector) {
  const board = document.querySelector(boardSelector);
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
}
