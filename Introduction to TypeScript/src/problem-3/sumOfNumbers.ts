function calculateSum(start: string, end: string): void {
    let sum: number = 0;
    const startNum: number = Number(start);
    const endNum: number = Number(end);

    for (let index = startNum; index <= endNum; index++) {
        sum += index;
    };

    console.log(sum);
};