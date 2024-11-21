class CompareElements<T> {
  data: T[];

  constructor(data: T[]) {
    this.data = data;
  }

  compare(comparator: T): number {
    let matchedCount: number = 0;
    this.data.forEach((element) => {
      if (element === comparator) {
        matchedCount++;
      }
    });

    return matchedCount;
  }
}