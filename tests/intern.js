const employee = require('./employee');

class intern extends employee {
    constructor({name, email, id}) {
    // property inherited from the parent employee class, name, email and id
        super({name, email, id});

    // Used to access the users input of school name
        this.school = school;

    // Retreives the users input for the intern
        this.role = "intern";
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

//Exports the information to the index.js file
module.exports = intern;