const fs = require('fs');
const inquirer = require('inquirer');
const { Shape, Triangle, Circle, Square } = require('./lib/shapes');

async function createLogo() {
  const answers = await inquirer.prompt([
    { name: 'text', message: 'Enter text (up to 3 characters): ' },
    { name: 'textColor', message: 'Enter text color: ' },
    { name: 'shapeType', message: 'Enter shape (circle, triangle, square): ' },
    { name: 'shapeColor', message: 'Enter shape color: ' },
  ]);

  let shape;
  switch (answers.shapeType.toLowerCase()) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.log('Invalid shape type.');
      return;
  }

  shape.setColor(answers.shapeColor);

  const svgContent = shape.render(answers.text, answers.textColor);
  fs.writeFileSync('./examples/logo.svg', svgContent);

  console.log('Generated logo.svg');
}

createLogo();
