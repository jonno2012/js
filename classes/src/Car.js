import Vehicle from './Vehicle.js';

export default class Car extends Vehicle {
    constructor(make, model, year, color, serialNumber) {
        super(make, model, year, serialNumber); // like parent
        this.color = color;
    }

    getColor() {
        return this.color;
    }
}