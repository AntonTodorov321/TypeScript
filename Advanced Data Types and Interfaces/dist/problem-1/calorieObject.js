function printFoods(foodCalories) {
    let foods = [];
    let foodName;
    for (let index = 0; index < foodCalories.length; index++) {
        if (index % 2 === 0) {
            foodName = foodCalories[index];
        }
        else {
            const calories = Number(foodCalories[index]);
            const food = {
                name: foodName,
                calories: calories
            };
            foods.push(food);
        }
        ;
    }
    ;
    return foods;
}
;
const foods = printFoods(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
let output = "";
for (let index = 0; index < foods.length; index++) {
    const food = foods[index];
    if (index + 1 === foods.length) {
        output += `${food.name}: ${food.calories}`;
    }
    else {
        output += `${food.name}: ${food.calories}, `;
    }
    ;
}
;
console.log(output);
//# sourceMappingURL=calorieObject.js.map