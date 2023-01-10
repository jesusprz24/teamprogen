// The engineer class extends into the employee class
class engineer extends employee {
    constructor({name, email, id, github}) {
        super({name, email, id});

        this.github = github;
        
        this.role = "engineer";
    }

    // this fuction returs the users github profile URL
    getGithub() {
        return this.github
    }

    // this return the engineer role when entered in the terminal
    getRole() {
        return this.role;   
    }
}

module.exports = engineer;