// the inquirer is imported to ask the questions to the user in order to generate the profile
const inquirer = require('inquirer');
const fs = require('fs');                       // fs is required to write the profile
const employee = require('./tests/employee');   // the employee file is imported
const manager = require('./tests/manager');     // the manager file is imported
const engineer = require('./tests/engineer');   // the engineer file is imported
const intern = require('./tests/intern');       // the intern file is imported
const { generate } = require('rxjs');
const generateHTML = require()

const employee = [];

// isTeamComplete will be declared as a boolean which is false
let isTeamComplete = false;

// this function will validate if the user is inputting information or not, if not it returns the message "please type your anwer before moving on"
const validateInput = (userInput) => {
    if (userInput === "") {
        return "please type your answer before moving on";
    } else {
        return true;
    }
}; 

const init = async () => {
    await createManager();

    while(!isTeamComplete) {

        // Create multiple choice questions for managers to choose which employees they want to add
        const employeeTypeQuestion = [
            {
                type: "list",
                message: "Please select the employee type you wish to add:",
                name: "employee type",
                // created an array for the names, value and short
                choices: [
                    { name: "Engineer", value: "engineer", short: "Engineer"},
                    { name: "Intern", value: "intern", short: "Intern"},
                    { name: "None", value: "none", short: "None"},
                ],
            },
        ];

        // generates the managers answers to the employee question
        const {employeeType} = await inquirer.createPromptModule(employeeTypeQuestion);

        // if manager clicks none on the questions, the team is done
        if(employeeType === "none") {
            isTeamComplete = true;
        // otherwise manager has the option of choosing engineer or intern, function will create a specific class for employee
        } else {
            if(employeeType === "engineer") {
                await createEngineer();
            }
            if (employeeType === "intern") {
                await createIntern();
            }
        }
    }

    //employees data is passed into HTML function and markdown is used to create the team-profile html
    const HTML = generateHTML(employees);
    fs.writeFileSync("team-profile.html", HTML, (err) => {
    // if errors occurs when writting to file
        if(err) {
            console.log(err)
    // if writting to file is successful, then the message "HTML file created" will be prompted to console
        } else {
            console.log("HTML file created");
        }
    });
}; 

const createManager = async () => {
    // This array is manager questions to ask the user
    const managerQuestions = [
      {
        type: "input",
        message: "Enter manager name",
        name: "name",
        validate: validateInput,
      },
      {
        type: "input",
        message: "Enter employee ID:",
        name: "id",
        validate: validateInput,
      }
      {
        type: "input",
        message: "Enter your office number:",
        name: "officeNumber",
        validate: validateInput,
      },
      {
        type: "input",
        message: "Enter work email:",
        name: "email",
        validate: validateInput,
      },
    ];

// the manager answers will be generated from the managers input of the questions
const managerAnswers = await inquirer.prompt(managerQuestions);

// the manager class rakes the managers answers
const manager = new manager(managerAnswers);

// tje manager object is pushed into the manager answers
employees.push(manager)
};

const createEngineer = async () => {
    // array of questions for the engineer for the user to input
    const engineerQuestions = [
        {
        type: "input",
        message: "Please enter engineer name:",
        name: "name",
        validate: validateInput,
        },
        {
        type: "input",
        message: "Please enter engineer ID:",
        name: "name",
        validate: validateInput,
        }, 
        {
        type: "input",
        message: "Please enter engineer email",
        name: "email",
        validate: validateInput,
        },
        {
        type: "input",
        message: "Please enter the github profile",
        name: "github",
        validate: validateInput,
        },
    ];

    // the engineers answers will be generated from the input to the questions
    const engineerAnswers = await inquirer.prompt(engineerQuestions);

    // the engineers class will take the answers
    const engineer = new engineer(engineerAnswers);

    // the engineer object is then pushed into the employee array
    employees.push(engineer);
}; 

// the intern function 
const createIntern = async () => {
    const interQuestions = [
        {
        type: "input",
        message: "Enter intern name:",
        name: "name",
        validate: validateInput,
        },
        {
        type: "input",
        message: "Enter intern ID:",
        name: "name",
        validate: validateInput,
        },
        {
        type: "input",
        message: "Enter intern email:",
        name: "name",
        validate: validateInput,
        },
        {
        type: "input",
        message: "Enter intern school name:",
        name: "name",
        validate: validateInput,
        },
    ];

    const internAnswers = await inquirer.prompt(interQuestions);
    
    const intern = new intern(internAnswers);

    employees.push(intern);
    
};

//initialize the application
init();