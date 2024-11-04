function calculate(firstNum, secondNum, operation) {
    let sum;
    if (operation === '+') {
        sum = firstNum + secondNum;
    }
    else if (operation === '-') {
        sum = firstNum - secondNum;
    }
    else if (operation === '*') {
        sum = firstNum * secondNum;
    }
    else if (operation === '/') {
        sum = firstNum / secondNum;
    }
    else if (operation === '%') {
        sum = firstNum % secondNum;
    }
    else if (operation === '**') {
        sum = firstNum ** secondNum;
    }
    ;
    return sum;
}
;
console.log(calculate(5, 6, '+'));
console.log(calculate(3, 5.5, '*'));
