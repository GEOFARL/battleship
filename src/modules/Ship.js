export default class Ship {
  constructor({ length, name }) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.name = name;
  }

  hit() {
    if (!this.isSunk()) {
      this.hits += 1;
      this.sunk = this.isSunk();
    }
  }

  isSunk() {
    return this.hits === this.length;
  }
}
