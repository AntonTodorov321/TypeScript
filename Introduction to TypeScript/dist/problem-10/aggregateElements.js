function sum(numbers) {
    let sum = 0;
    numbers.forEach(number => sum += number);
    return sum;
}
;
function inverseSum(numbers) {
    let sum = 0;
    numbers.forEach(number => sum += 1 / number);
    return sum;
}
;
function concat(numbers) {
    let concatedNums = '';
    numbers.forEach(number => concatedNums += number.toString());
    return concatedNums;
}
;
function aggregateElements(numbers) {
    console.log(sum(numbers));
    console.log(inverseSum(numbers));
    console.log(concat(numbers));
}
;
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
