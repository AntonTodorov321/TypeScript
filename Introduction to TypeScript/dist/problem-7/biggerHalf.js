function getNumbers(numbers) {
    const startIndex = Math.ceil(numbers.length / 2);
    numbers = numbers.sort((a, b) => a - b);
    numbers = numbers.slice(numbers.length % 2 === 0 ? startIndex : startIndex - 1);
    return numbers;
}
;
