// Includes packages needed for this application //
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { error } = require('console');

// Array of questions for user input //
const questions = [
    {
        type: "input",
        name: "title",
        message: "Whats your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of the application",

    },
    {
        type: "input",
        name: "installation",
        message: "Insert installation directions if applicable",
    },
    {
        type: "input",
        name: "usage",
        message: "provide example of use or provide screenshots",
    },
    {
        type: "list",
        name: "license",
        message: "input license detail",
        choices: ["MIT", "IBM", "Mozilla", "None"]
    },
    {
        type: "input",
        name: "credits",
        message: "input any credits for contributors",
    },
    {
        type: "input",
        name: "e-mail",
        message: "Insert optional email address",
    },
    {
        type: "input",
        name: "github username",
        message: "Insert Github username",
    }
];

// Function to write README file //
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("file created successfully");
    });
}

// Function to initialize app //
function init() { 
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app //
init();
