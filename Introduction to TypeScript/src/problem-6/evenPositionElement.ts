function evenPositionNumbers(numbers: string[]): string {
    let evenNumbers: number[] = [];

    for (let index = 0; index < numbers.length; index++) {
        if (index % 2 === 0) {
            evenNumbers.push(Number(numbers[index]));
        };
    };

    return evenNumbers.join(' ');
};
