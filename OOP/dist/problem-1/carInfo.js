class Car {
    _brand;
    _model;
    _horsePower;
    constructor(brand, model, horsePower) {
        this._brand = brand;
        this._model = model;
        this._horsePower = horsePower;
    }
    get brand() {
        return this._brand;
    }
    set brand(newBrand) {
        this._brand = newBrand;
    }
    get model() {
        return this._model;
    }
    set model(newModel) {
        this._model = newModel;
    }
    get horsePower() {
        return this._horsePower;
    }
    set horsePower(newHorsePower) {
        this._horsePower = newHorsePower;
    }
}
function createCar(carInfo) {
    const carParts = carInfo.split(" ");
    const brand = carParts[0];
    const model = carParts[1];
    const horsePower = Number(carParts[2]);
    return new Car(brand, model, horsePower);
}
const car = createCar("Chevrolet Impala 390");
console.log(`The car is: ${car.brand} ${car.model} – ${car.horsePower} HP.`);
//# sourceMappingURL=carInfo.js.map