// employee class
class Emplyee {
    constructor({name, id, email}) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // the getName will take the users input and add it to the employee class
    getName() {
        return this.name;
    }

    // the id retrieves the user input information for the employee class
    getId() {
        return this.id;
    }

    // the getEmail takes the users inputted email for the employee class
    getEmail() {
        return this.email;
    }
}

module.exports = employee; 