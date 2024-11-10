type Food = {
    name: string;
    calories: number;
};

function printFoods(foodCalories: string[]): Food[] {
    let foods: Food[] = [];
    let foodName: string;

    for (let index: number = 0; index < foodCalories.length; index++) {
        if (index % 2 === 0) {
            foodName = foodCalories[index];
        } else {
            const calories = Number(foodCalories[index]);

            const food: Food = {
                name: foodName,
                calories: calories
            };
            foods.push(food);
        };
    };

    return foods;
};

const foods = printFoods(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
let output: string = "";

for (let index: number = 0; index < foods.length; index++) {
    const food: Food = foods[index];
    if (index + 1 === foods.length) {
        output += `${food.name}: ${food.calories}`;
    } else {
        output += `${food.name}: ${food.calories}, `;
    };
};

console.log(output);

