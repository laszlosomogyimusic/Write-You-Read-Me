const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fileName = "./generated_files/README-generated.md";

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'checkbox',
    message: 'What languages do you know?',
    name: 'stack',
    choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    type: 'list',
    message: 'What is your preferred method of communication?',
    name: 'contact',
    choices: ['email', 'phone', 'telekinesis'],
  },
];

// function to write README file
function writeToFile(fileName, data) {
  console.log(`${data.name} ${data.stack} ${data.contact}`);

  fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
  err ? console.log(err) : console.log('Success!')
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    writeToFile(fileName, answers);
  }
  ); 
}

// function call to initialize program
init();
