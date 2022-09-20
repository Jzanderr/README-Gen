// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { file } = require('tmp');
// An array of Questions for user input
const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
      },
      {
        type: 'input',
        name: 'install',
        message: 'How does one install this project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please input usage information here.',
      },
      {
          type: 'list',
          name: 'license',
          message: 'Please choose a license for you project.',
          choices:[ 'MIT license', 'Apache 2.0 license', 'GNU General public license', 'None']          
        },
        {
          type: 'input',
          name: 'git',
          message: 'Enter your Github user name.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email.',
          },
]
function  writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        }
    });
}
function init() {
    
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('README.md', generateMarkdown(answers));
})};

init();