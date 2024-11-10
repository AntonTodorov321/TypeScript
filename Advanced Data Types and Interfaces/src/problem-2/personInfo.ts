interface Person {
    firstName: string;
    lastName: string;
    age: number;
};

function printPersonInfo(firstName: string, lastName: string, age: string): void {
    const person: Person = {
        firstName,
        lastName,
        age: Number(age),
    };

    console.log(`firstName: ${person.firstName}`);
    console.log(`lastName: ${person.lastName}`);
    console.log(`age: ${person.age}`);
};