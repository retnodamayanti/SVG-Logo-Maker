const questions = [

    {
        type: 'input',
        name: 'text',
        message: 'Enter text (up to 3 characters) for your logo: '
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color by keyword or hexadecimal number:'
    },
    {
        type: 'list',
        name: 'shapeType',
        message: "Choose a shape from the list.",
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color by keyword or hexadecimal number:'
    },
]

module.exports = questions;