const employee = {
    name: "hyun",
    age: 27,
    position: "developer",
    work() {
        console.log("work hard");
    },
};
class Employee {
    name;
    age;
    position;
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    work() {
        console.log("work hard");
    }
}
const employeeB = new Employee("hyun", 27, "programmer");
console.log(employeeB);
const employeeC = {
    name: "",
    age: 0,
    position: "",
    work() { },
};
class ExecutiveOfficer extends Employee {
    officeNumber;
    constructor(name, age, position, officeNumber) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}
export {};
