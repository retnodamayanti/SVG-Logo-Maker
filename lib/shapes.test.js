const { Shape, Triangle, Circle, Square } = require('./shapes');

describe('Shape', () => {
  test('setColor sets the color correctly', () => {
    const shape = new Shape();
    shape.setColor('red');
    expect(shape.color).toBe('red');
  });
});

describe('Triangle', () => {
  test('render returns the correct SVG string', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });
});

describe('Circle', () => {
  test('render returns the correct SVG string', () => {
    const shape = new Circle();
    shape.setColor('green');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
  });
});

describe('Square', () => {
  test('render returns the correct SVG string', () => {
    const shape = new Square();
    shape.setColor('#FF00FF');
    expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="#FF00FF" />');
  });
});
