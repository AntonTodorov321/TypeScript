class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
    ;
}
;
function sayMeow(cats) {
    cats.forEach(cat => {
        const [name, age] = cat.split(" ");
        const catName = name;
        const catAge = Number(age);
        const currentCat = new Cat(catName, catAge);
        currentCat.meow();
    });
}
;
