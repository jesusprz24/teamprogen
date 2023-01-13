const fs = require("fs");

//path will be imported
const path = require("path");

// the templates will be imported to use
const templateDir = path.resolve(__dirname, "./templates");

//generateHTML uses the emplyee array 
const generateHTML = (employees) => {
    const HTML = [];

    //the functions below will be used to filter between, manager, engineer and intern. They will then be pushed into the HTML array.
    HTML.push(
        employees
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => renderManager(manager))
    );
    HTML.push(
        employees
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => renderManager(engineer))
    );
    HTML.push(
        employees
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => renderManager(intern))
    );
    
    return renderFullMarkdown(HTML.join(""));
};

// this will render a new manager class after used
const renderManager = (manager) => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, "manager.html"),
        "utf8"
    );
    
    // Replaces the template in manager html with fields where users can input data for name, id, roles, and email.
    template = replaceTemplates(template, "name", manager.getName());
    template = replaceTemplates(template, "id", manager.getId());
    template = replaceTemplates(template, "role", manager.getRole());
    template = replaceTemplates(template, "email", manager.getEmail());
    template = replaceTemplates(
    template,
    "officeNumber",
    manager.getOfficeNumber()
    );
    // once the template is updated it will be returned
    return template;
};

const renderEngineer = (engineer) => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, "engineer.html"),
        "utf8"
    );

    // repeat as done before but this time with engineer properties
    template = replaceTemplates(template, "name", manager.getName());
    template = replaceTemplates(template, "id", manager.getId());
    template = replaceTemplates(template, "role", manager.getRole());
    template = replaceTemplates(template, "email", manager.getEmail());
    template = replaceTemplates(template, "github", manager.getGithub());
    return template;
};

const renderIntern = (intern) => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, "intern.html"),
        "utf8"
    );

    template = replaceTemplates(template, "name", manager.getName());
    template = replaceTemplates(template, "id", manager.getId());
    template = replaceTemplates(template, "role", manager.getRole());
    template = replaceTemplates(template, "email", manager.getEmail());
    template = replaceTemplates(template, "school", manager.getSchool());
    return template;
};

const renderFullMarkdown = (HTML) => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, "full-markdown.html"),
        "utf8"
    );
    return replaceTemplates(template, "team", HTML);
};

//inside the double curly braces is the placeholder, 
const replaceTemplates = (template, placeholder, value) => {
    const pattern = new RegExp(`{{${placeholder}}}`, "gm");
    return template.replace(pattern, value);
};

module.exports = generateHTML;

