import inquirer from 'inquirer';
import fs from 'fs';

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a brief description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions for use:"
    },
    {
        type: "input",
        name: "credits",
        message: "List any collaborators or sources you used to develop your project:"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: [
            'Apache 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'The Unlicense'
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the guidelines for contributing to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "What tests have you written for your project?"
    }
];

inquirer.prompt(questions).then(answers => {
    const {
        title,
        description,
        installation,
        usage,
        credits,
        license,
        contributing,
        tests
    } = answers;

    const readme = `
# ${title}

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${license}

## Contributing

${contributing}

## Tests

${tests}
`;

    fs.writeFile("README.md", readme, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("README.md file created successfully!");
    });
});
