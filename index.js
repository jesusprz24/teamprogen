const fs = require('fs');
const employee = require('./tests/employee');
const inquirer = require('inquirer');
const manager = require('./tests/managertest');
const engineer = require('./tests/engineertest');
const intern = require('./tests/interntest');

class prompt {
    constructor() {
        this.teamArray = [];
    }
}

getTeamArray() {
    return this.teamArray;
}

questions() {
    inquirer.promt (
        {
            type: 'list',
            name: 'employeeType'
        }
    )
}