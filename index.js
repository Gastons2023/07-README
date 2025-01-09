// TODO: Include packages needed for this application
import fs from "fs"
import path from "path"
import inquirer from "inquirer"
import generateMarkdown from "./utils/generateMarkdown.js"

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project name?",
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?",
    },
    {
        type: "input",
        name: "installation",
        message: "Give installation instructions?",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information",
    },
    {
        type: "input",
        name: "contribution",
        message: "How to contribute?",
    },
    {
        type: "input",
        name: "test",
        message: "How to run tests?",
    },
    {
        type: "list",
        name: "license",
        message: "Choose project license.",
        choices: ["MIT","APACHE 2.0","BSD 3","None"]
    },
    {
        type: "input",
        name: "gihub",
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=>{
        const markDownData= generateMarkdown(answers)
        writeToFile('README.md', markDownData)
    })
}
// Function call to initialize app
init();

