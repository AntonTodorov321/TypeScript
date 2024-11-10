;
function printPersonInfo(firstName, lastName, age) {
    const person = {
        firstName,
        lastName,
        age: Number(age),
    };
    console.log(`firstName: ${person.firstName}`);
    console.log(`lastName: ${person.lastName}`);
    console.log(`age: ${person.age}`);
}
;
