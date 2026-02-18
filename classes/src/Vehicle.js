export default class Vehicle {
    #serialNumber; // marks as private
    constructor(make, model, year, serialNumber) {
        this.#serialNumber = serialNumber;
        this.make = make;
        this.model = model;
        this.year = year;
        this.#serialNumber = serialNumber;
    }

    getMake() {
        return this.make;
    }

    getModel() {
        return this.model;
    }
    
    getYear() {
        return this.year;
    }

    getSerialNumber() {
        return this.#serialNumber;
    }
}