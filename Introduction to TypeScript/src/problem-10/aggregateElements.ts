function sum(numbers: number[]): number {
    let sum: number = 0;

    numbers.forEach(number => sum += number);
    return sum;
};

function inverseSum(numbers: number[]): number {
    let sum: number = 0;

    numbers.forEach(number => sum += 1 / number);
    return sum;
};

function concat(numbers: number[]): string {
    let concatedNums: string = '';

    numbers.forEach(number => concatedNums += number.toString());
    return concatedNums;
};

function aggregateElements(numbers: number[]): void {
    console.log(sum(numbers));
    console.log(inverseSum(numbers));
    console.log(concat(numbers));
};