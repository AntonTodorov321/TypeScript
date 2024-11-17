class Employee {
    name;
    salary;
    position;
    email;
    age;
    constructor(name, salary, position, email, age) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.email = email;
        this.age = age;
    }
}
class Department {
    name;
    empolyees = [];
    constructor(department) {
        this.name = department;
    }
    getAvgSalary() {
        const totalSalary = this.empolyees.reduce((acc, employee) => acc + employee.salary, 0);
        return totalSalary / this.empolyees.length;
    }
}
function getDepartmentWithHighestSalary(input) {
    const numberOfEmployees = Number(input.shift());
    let departments = [];
    for (let index = 0; index < numberOfEmployees; index++) {
        const employeeInfo = input[index].split(" ");
        const name = employeeInfo[0];
        const salary = Number(employeeInfo[1]);
        const position = employeeInfo[2];
        const department = employeeInfo[3];
        const email = employeeInfo[4];
        const age = Number(employeeInfo[5]);
        const employee = new Employee(name, salary, position, email, age);
        const searchingDepartment = departments.find((d) => d.name === department);
        if (!searchingDepartment) {
            const newDepartment = new Department(department);
            newDepartment.empolyees.push(employee);
            departments.push(newDepartment);
        }
        else {
            searchingDepartment.empolyees.push(employee);
        }
    }
    let highestSalaryDepartment = departments.reduce((acc, department) => {
        return department.getAvgSalary() > (acc?.getAvgSalary() || 0)
            ? department
            : acc;
    }, undefined);
    highestSalaryDepartment.empolyees.sort((a, b) => b.salary - a.salary);
    return highestSalaryDepartment;
}
const bestDepartment = getDepartmentWithHighestSalary([
    "6",
    "Silver 496.37 Temp Coding silver@yahoo.com",
    "Sam 610.13 Manager Sales",
    "John 609.99 Manager Sales john@abv.bg 44",
    "Venci 0.02 Director BeerDrinking beer@beer.br 23",
    "Andre 700.00 Director Coding",
    "Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey"
]);
console.log(`Highest Average Salary: ${bestDepartment.name}`);
bestDepartment.empolyees.forEach((employee) => {
    console.log(`${employee.name} ${employee.salary.toFixed(2)} ${employee.email ? employee.email : "n/a"} ${employee.age ? employee.age : "-1"}`);
});
//# sourceMappingURL=companyRoster.js.map