import Ship from "../modules/Ship";

const ship = new Ship({ length: 4 })

describe('Have properties', () => {
  test('Ship should have a length property', () => {
    expect(ship).toHaveProperty('length');
  });

  test('Ship should have a hits property', () => {
    expect(ship).toHaveProperty('hits');
  });

  test('Ship should have a sunk property', () => {
    expect(ship).toHaveProperty('sunk');
  });
});

describe('Correctness of the methods', () => {
  test('hit method increases hits ', () => {
    const ship = new Ship({ length: 2 })
    ship.hit()
    ship.hit()
    expect(ship.hits).toBe(2);
  });

  test('hit method does not increases hits if the ship is sunk', () => {
    const ship = new Ship({ length: 2 })
    for (let i = 0; i < 4; i += 1) {
      ship.hit()
    }
    expect(ship.hits).toBe(2);
  });

  test('sunk is set to true, if hits is equal to length', () => {
    const ship = new Ship({ length: 4 })
    for (let i = 0; i < 4; i += 1) {
      ship.hit()
    }
    expect(ship.sunk).toBeTruthy();
  });

  test('sunk is set to false, if hits is less than length', () => {
    const ship = new Ship({ length: 4 })
    for (let i = 0; i < 3; i += 1) {
      ship.hit()
    }
    expect(ship.sunk).toBeFalsy();
  });
});