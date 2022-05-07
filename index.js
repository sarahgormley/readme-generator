// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitname',
    },
    {
        type: 'input',
        message: 'What is your Email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectname',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'description',
    },
    {
        type: 'checkbox',
        message: 'What license does your project have?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GNU 3.0', 'None'],
    },
    {
        type: 'input',
        message: 'Who is credited on this project?',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'What command should be used to run tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using this repository?',
        name: 'userepos',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to this repository?',
        name: 'contribute',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();