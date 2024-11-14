class Car {
  private _brand: string;
  private _model: string;
  private _horsePower: number;

  constructor(brand: string, model: string, horsePower: number) {
    this._brand = brand;
    this._model = model;
    this._horsePower = horsePower;
  }

  get brand(): string {
    return this._brand;
  }

  set brand(newBrand: string) {
    this._brand = newBrand;
  }

  get model(): string {
    return this._model;
  }

  set model(newModel: string) {
    this._model = newModel;
  }

  get horsePower(): number {
    return this._horsePower;
  }

  set horsePower(newHorsePower: number) {
    this._horsePower = newHorsePower;
  }
}

function createCar(carInfo: string): Car {
  const carParts: string[] = carInfo.split(" ");
  const brand = carParts[0];
  const model = carParts[1];
  const horsePower = Number(carParts[2]);

  return new Car(brand, model, horsePower);
}

const car: Car = createCar("Chevrolet Impala 390");
console.log(`The car is: ${car.brand} ${car.model} – ${car.horsePower} HP.`);
