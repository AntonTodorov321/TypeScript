function calculateSum(start, end) {
    let sum = 0;
    const startNum = Number(start);
    const endNum = Number(end);
    for (let index = startNum; index <= endNum; index++) {
        sum += index;
    }
    ;
    console.log(sum);
}
;
