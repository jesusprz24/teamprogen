const employee = require('./employee');

class manager extends employee {
    constructor({name, email, id,}) {

        super({name, email, id});

        // defines the role for the class of manager
        this.role = "Manager";
    }

    // getRole function retrieves the data of the manager class
    getRole() {
        return this.role;
    }
}

// manager class will be exported to the index.js when accessed
module.exports = manager;