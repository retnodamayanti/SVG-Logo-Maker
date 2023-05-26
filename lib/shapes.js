class Shape {
  constructor() {
    this.color = 'black';
  }

  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,18 244,182 56,182" fill="${this.color}" />
        <text x="50%" y="50%" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="black">Triangle</text>
      </svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="50%" y="50%" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="black">Circle</text>
      </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
        <text x="50%" y="50%" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="black">Square</text>
      </svg>`;
  }
}

module.exports = { Shape, Triangle, Circle, Square };
