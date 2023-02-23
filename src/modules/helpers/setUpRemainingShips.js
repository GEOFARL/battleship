function setUpSection(element) {
  element.innerHTML = `<div class="ship ship--small">
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
          </div>

          <div class="ship ship--small">
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
          </div>

          <div class="ship ship--small">
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
          </div>

          <div class="ship ship--small">
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
          </div>

          <div class="ship ship--small">
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
          </div>

          <div class="ship ship--small">
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
          </div>

          <div class="ship ship--small">
            <div class="ship__cell"></div>
            <div class="ship__cell"></div>
          </div>`;
}

export default function setUpRemainingShips() {
  setUpSection(document.querySelector('.remaining-ships--player'));
  setUpSection(document.querySelector('.remaining-ships--computer'));
}
