// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your FULL NAME?",
      name: "fullName",
    },
    {
      type: "input",
      message: "What is the project title?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the project description?",
      name: "description",
    },
    {
      type: "input",
      message: "What are the installation instructions?",
      name: "installation",
    },
    {
      type: "input",
      message: "What is the usage information?",
      name: "usage",
    },
    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "contribution",
    },
    {
      type: "input",
      message: "What are the test instructions?",
      name: "testInstructions",
    },
    {
      type: "list",
      message: "What license is applicable to his project?",
      name: "license",
      choices: ["Apache-2.0", "GNU GPLv2", "GNU GPLv3", "ISC", "MIT"],
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  var markdownString = generateMarkdown(data);
  fs.writeFile(fileName, markdownString, (err) => {
    return err ? console.log(err) : console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  questions().then((answers) => writeToFile("newREADME.md", answers));
}

// Function call to initialize app
init();
