const Employee = require("..lib/employee");

// describe allows to gather tests into seperate groupings within the same file
describe("Employee", () => {
    const mockEmployee = {          //using mark to see if it works
        name: "Mark",
        id: 130,
        email: "mark@code.com",
    };
    // describe 
    describe("constructor tests", () => {
        tests("should construct a new instance of an emplyee class", () => {
            const employee = new Employee(mockEmployee);
            expect(employee).toBeInstanceOf(Employee);
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