const { Shape, Triangle, Circle, Square } = require('../lib/shapes');

describe('Shape', () => {
  test('setColor sets the color correctly', () => {
    const shape = new Shape();
    shape.setColor('red');
    expect(shape.color).toBe('red');
  });
});

describe('Triangle', () => {
 test('render returns the correct SVG string', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const expected = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,18 244,182 56,182" fill="blue" />
        <text x="50%" y="50%" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="black"></text>
      </svg>`;
    expect(triangle.render()).toEqual(expected);
  });
});

describe('Circle', () => {
  test('render returns the correct SVG string', () => {
    const circle = new Circle();
    circle.setColor('black');
    const expected = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="black" />
        <text x="50%" y="50%" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="black"></text>
      </svg>`;
    expect(circle.render()).toEqual(expected);
  });
});

describe('Square', () => {
  test('render returns the correct SVG string', () => {
    const square = new Square();
    square.setColor('black');
    const expected = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="100" fill="black" />
        <text x="50%" y="50%" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="black"></text>
      </svg>`;
    expect(square.render()).toEqual(expected);
  });
});
