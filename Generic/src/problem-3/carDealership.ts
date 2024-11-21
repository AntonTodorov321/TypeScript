interface Dealership<T> {
  dealershipName: T;
  soldCars: number;
}

interface Actions<T> {
  sellCar<T extends string | number>(dealerId: T, model: T);
}

class CarDealership<T> implements Dealership<T>, Actions<T> {
  modelsSold = {};
  dealershipName: T;
  soldCars = 0;

  constructor(dealershipName: T) {
    this.dealershipName = dealershipName;
  }

  sellCar<T extends string | number>(dealerId: T, model: T) {
    this.modelsSold = {
      ...this.modelsSold,
      [dealerId]: model,
    };
  }

  showDetails(): string {
    let result: string = "";
    result += `${this.dealershipName}: \n`;

    for (const key in this.modelsSold) {
      result += `${key} sold ${this.modelsSold[key]} \n`;
    }

    return result;
  }
}
