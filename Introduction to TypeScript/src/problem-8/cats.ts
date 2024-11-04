class Cat {
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };

    name: string;
    age: number;
    meow(): void {
        console.log(`${this.name}, age ${this.age} says Meow`);
    };
};

function sayMeow(cats: string[]): void {
    cats.forEach(cat => {
        const [name, age] = cat.split(" ");
        const catName: string = name;
        const catAge: number = Number(age);

        const currentCat: Cat = new Cat(catName, catAge);
        currentCat.meow();
    });
};