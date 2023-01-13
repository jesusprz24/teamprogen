const Engineer = require("..lib/engineer.js");

describe("Engineer", () => {
    const mockEngineer = {
        name: "Jesus",
        id: 150,
        email: "jesus@code.com"
        github: "www.github/jesus_code",
    };

    describe("constructor tests", () => {
        test("should contruct a new instance of the engineer class", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer).toBeInstanceOf(Engineer);
        });
        test("should construct a new instance of an engineer class with name, id, email and github", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer).toEqual({
                name: "Jesus",
                id: 150,
                email: "jesus@code.com",
                github: "www.github/jesus_code",
                role: "Engineer",
            });
        });
    });
    describe("method tests", () => {
        test("should return id when the getid method is called", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getId()).toEqual(150);
        });

        test("should return name when the getName method is called", ( => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getName()).toEqual("Jesus");
        }));

        test("should return email when the getEmail method is called", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getEmail()).toEqual("Jesus@code.com");
        });
        test("should return github profile URL when the getGthub method is called", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer .getGithub()).toEqual("www.github.com/jesus_code");
        });
        test("should reurn engineer role when the getRole method is called", () => {
            const engineer = new Engineer(mockEngineer);
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});