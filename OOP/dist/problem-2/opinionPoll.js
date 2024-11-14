class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const createPerson = (personLine) => {
    const personInfo = personLine.split(" ");
    const name = personInfo[0];
    const age = Number(personInfo[1]);
    return new Person(name, age);
};
const person = createPerson("Sofia 33");
console.log(`${person.name} is ${person.age} years old.`);
//# sourceMappingURL=opinionPoll.js.map