class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const createPerson = (personLine: string): Person => {
  const personInfo: string[] = personLine.split(" ");
  const name: string = personInfo[0];
  const age: number = Number(personInfo[1]);

  return new Person(name, age);
};

const person: Person = createPerson("Sofia 33");
console.log(`${person.name} is ${person.age} years old.`);
