const Employee = require("../lib/manager");

// describe allows to gather tests into seperate groupings within the same file
describe("Manager", () => {
    const mockEmployee = {          //using mark to see if it works
        name: "Mark",
        id: 130,
        email: "mark@code.com",
    };
    // describe 
    describe("tests", () => {
        tests("should construct a new instance of an emplyee class", () => {
            //tried using mock but don't properly know how to use so I took it out
            const manager = new Manager(manager);
            expect(manager).toBeInstanceOf(manager);
        });
        test("should construct a new instance of an emplyee class with name, id, email", () => {
            const employee = new Employee(mockEmployee);
            expect(employee).toBeInstanceOf(Employee);
        });
        test("should contruct a new instance of an employee class with name, id, email", () => {
            const employee = new Employee(mockEmployee);
            expect(employee).toEqual({
                name: "Mark",
                id: 130,
                email: "mark@code.com",
            });
        });
    });

    describe("method tests", () => {
        test("should return id when the getid is called", () => {
            const employee = new Employee(mockEmployee);
            expect(employee.getId()).toEqual(130);
        });
        test("should return name when getName is called", () => {
            const employee = new Employee(mockEmployee);
            expect(employee.getId()).toEqual("Mark");
        });

        test("should return id when the getid method is called", () => {
            const employee = new Employee(mockEmployee);
            expect(employee.getId()).toEqual(130);
        });
})});