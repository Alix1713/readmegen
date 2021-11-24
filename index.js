// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation,
// Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains
//which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

//node index.js
//fs.readfile(readme.md)
const liscensetoBadge = {
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  GPL3: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  Apache:
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
};
const fs = require("fs");
const inquirer = require("inquirer");
//these are my prompts in terminal
inquirer
  .prompt([
    {
      // WHEN I enter my project title
      type: "input",
      message: "What is the project name?",
      name: "projectname",
    },
    {
      // WHEN I enter a description
      type: "input",
      message: "What does this project do?",
      name: "does",
    },
    {
      //Installation
      type: "input",
      message: "Installation instructions:",
      name: "install",
    },
    {
      //Instructions
      type: "input",
      message: "How to use:",
      name: "instructions",
    },
    {
      //Contribution
      type: "input",
      message: "Contributions",
      name: "contribute",
    },
    {
      // WHEN I choose a license for my application from a list of options
      //Liscense
      type: "list",
      message: "Liscense",
      choices: Object.keys(liscensetoBadge), //what do I put here?
      name: "Liscense",
    },
    {
      //Email
      type: "input",
      message: "Email: ",
      name: "email",
    },
    {
      //GitHub
      type: "input",
      message: "GitHub Repo: ",
      name: "github",
    },
    {
      //Linked In
      type: "input",
      message: "Linkedin Url:",
      name: "linkedin",
    },
  ])
  .then((data) => {
    const dataContent = generateTemplate(data);
    fs.writeFile("readme.md", dataContent, (error) => {
      if (error !== null) {
        console.log(error);
      }
    });
  });

const generateTemplate = (data) => {
  return `
# ReadME ${data.projectname}
What ${data.projectname} application does
${data.does}

# Table of Contents:
1. [Installation](#how-to-install)
2. [How to Use](#how-to-use-this-project)
3. [Contributors](#contributors)
4. [Liscense](#liscense)
5. [Contact information](#contact-information)

## How to install:
${data.install}

## How to use this project:
${data.instructions}

## Contributors:
${data.contribute}

## Liscense:
${data.liscense}
${liscensetoBadge[data.liscense]}

## Contact information
### Email:
[email](mailto:${data.email})

### My GitHub:
[github](${data.github})

### My LinkedIn:
[linkedin](${data.linkedin})
`;
};
