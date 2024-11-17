class Employee {
  name: string;
  salary: number;
  position: string;
  email?: string;
  age?: number;

  constructor(
    name: string,
    salary: number,
    position: string,
    email?: string,
    age?: number
  ) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.email = email;
    this.age = age;
  }
}

class Department {
  name: string;
  empolyees: Employee[] = [];

  constructor(department: string) {
    this.name = department;
  }

  getAvgSalary(): number {
    const totalSalary: number = this.empolyees.reduce(
      (acc, employee) => acc + employee.salary,
      0
    );

    return totalSalary / this.empolyees.length;
  }
}

function getDepartmentWithHighestSalary(input: string[]) {
  const numberOfEmployees: number = Number(input.shift());
  let departments: Department[] = [];

  for (let index: number = 0; index < numberOfEmployees; index++) {
    const employeeInfo: string[] = input[index].split(" ");
    const name: string = employeeInfo[0];
    const salary: number = Number(employeeInfo[1]);
    const position: string = employeeInfo[2];
    const department: string = employeeInfo[3];
    const email: string | undefined = employeeInfo[4];
    const age: number | undefined = Number(employeeInfo[5]);

    const employee: Employee = new Employee(name, salary, position, email, age);

    const searchingDepartment: Department | undefined = departments.find(
      (d) => d.name === department
    );

    if (!searchingDepartment) {
      const newDepartment: Department = new Department(department);
      newDepartment.empolyees.push(employee);
      departments.push(newDepartment);
    } else {
      searchingDepartment.empolyees.push(employee);
    }
  }

  let highestSalaryDepartment: Department = departments.reduce(
    (acc, department) => {
      return department.getAvgSalary() > (acc?.getAvgSalary() || 0)
        ? department
        : acc;
    },
    undefined
  );

  highestSalaryDepartment.empolyees.sort((a, b) => b.salary - a.salary);
  return highestSalaryDepartment;
}

const bestDepartment: Department = getDepartmentWithHighestSalary([
  "6",
  "Silver 496.37 Temp Coding silver@yahoo.com",
  "Sam 610.13 Manager Sales",
  "John 609.99 Manager Sales john@abv.bg 44",
  "Venci 0.02 Director BeerDrinking beer@beer.br 23",
  "Andre 700.00 Director Coding",
  "Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey",
]);

console.log(`Highest Average Salary: ${bestDepartment.name}`);
bestDepartment.empolyees.forEach((employee) => {
  console.log(
    `${employee.name} ${employee.salary.toFixed(2)} ${
      employee.email ? employee.email : "n/a"
    } ${employee.age ? employee.age : "-1"}`
  );
});
