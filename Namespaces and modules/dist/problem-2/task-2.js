class Courier {
    placesToVisit = [];
    constructor(plaseToVistit) {
        this.placesToVisit = plaseToVistit;
    }
    newCustomer(customerName, visited = false) {
        if (this.placesToVisit.find((p) => p.customerName === customerName)) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }
        const plaseToVisit = {
            customerName,
            visited,
        };
        this.placesToVisit.push(plaseToVisit);
        return `${customerName} just became your client.`;
    }
    visitCustomer(customerName) {
        const searchingPlaceToVisit = this.placesToVisit.find((p) => p.customerName === customerName);
        if (!searchingPlaceToVisit) {
            throw new Error(`${customerName} is not your customer`);
        }
        searchingPlaceToVisit.visited = !searchingPlaceToVisit.visited;
    }
    showCustomers() {
        let placesToVisit = "";
        this.placesToVisit.forEach((pv, index) => {
            placesToVisit += `${pv.customerName} -> ${pv.visited}`;
            if (index < this.placesToVisit.length - 1) {
                placesToVisit += `\r\n`;
            }
        });
        return placesToVisit;
    }
}
let courier = new Courier([{ customerName: "DHL", visited: false }]);
courier.newCustomer("Speedy");
courier.newCustomer("MTM");
courier.newCustomer("TipTop");
courier.visitCustomer("DHL");
courier.visitCustomer("MTM");
courier.visitCustomer("MTM");
console.log(courier.showCustomers());
//# sourceMappingURL=task-2.js.map