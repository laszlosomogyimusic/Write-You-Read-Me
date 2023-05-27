const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fileName = "./generated_files/README-generated.md";

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'projectname',
    message: 'What is the project name?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe the project in few sentences',
  },
  {
    type: 'input',
    name: 'install',
    message: 'Please write down the install process',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please explain how to use the software',
  },
  {
    type: 'list',
    message: 'What license do you use?',
    name: 'license',
    choices: ['MIT', 'GNU', 'telekinesis'],
  },
  // {
  //   type: 'checkbox',
  //   message: 'What languages do you know?',
  //   name: 'stack',
  //   choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  // },

];

// function to write README file
function writeToFile(fileName, data) {
  console.log(`${data.name} ${data.stack} ${data.contact}`);

  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Success!')
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    let fullText = generateMarkdown(answers);
    writeToFile(fileName, fullText);
  }
  ); 
}

// function call to initialize program
init();
