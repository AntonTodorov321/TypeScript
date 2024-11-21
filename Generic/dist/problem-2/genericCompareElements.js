class CompareElements {
    constructor(data) {
        this.data = data;
    }
    compare(comparator) {
        let matchedCount = 0;
        this.data.forEach((element) => {
            if (element === comparator) {
                matchedCount++;
            }
        });
        return matchedCount;
    }
}
