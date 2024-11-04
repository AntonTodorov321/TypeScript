function printEmployees(employees: string[]): void {
    employees.forEach(employee => {
        console.log(`Name: ${employee} -- Personal Number: ${employee.length}`);
    });
};