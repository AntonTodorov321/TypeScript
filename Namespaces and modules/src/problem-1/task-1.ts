class Person<T> implements Greeter.Greeting<T> {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }

  introduction(): string {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }

  sayGoodbye(name: T) {
    return `Dear ${name}, it was a pleasure meeting you!`;
  }
}