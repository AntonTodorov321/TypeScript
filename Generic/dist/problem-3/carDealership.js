class CarDealership {
    constructor(dealershipName) {
        this.modelsSold = {};
        this.soldCars = 0;
        this.dealershipName = dealershipName;
    }
    sellCar(dealerId, model) {
        this.modelsSold = Object.assign(Object.assign({}, this.modelsSold), { [dealerId]: model });
    }
    showDetails() {
        let result = "";
        result += `${this.dealershipName}: \n`;
        for (const key in this.modelsSold) {
            result += `${key} sold ${this.modelsSold[key]} \n`;
        }
        return result;
    }
}
let dealership = new CarDealership('SilverStar');
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
