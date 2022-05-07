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
    },
    {
        type: 'input',
        message: 'How does the user install this project?',
        name: 'install',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
`# ${projectname} 

## Table Of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [Credits](#credits)
* [License](#license)
* [Contributions](#contributions)
* [Questions](#questionscontact)


## Video Walkthrough

## Description
${description}.


## Installation
To install the dependencies required for this repository, please run the following command:
  `
``
bash
$ { install }
``
`

## Usage
${userepos}.

## Testing
To run tests on this repository, please use the following command:
  `
``
bash
$ { tests }
``
`

## Credits
${credits}


## License
This repository is licenced under ${license}.

## Contributions
To contribute to this project, please ${contribute}.


## Questions/Contact
For questions and comments related to this repository, please email me at: ${email}. Alternatively, view my other projects at ${gitname}.
`

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();