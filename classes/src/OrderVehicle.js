import Vehicle from "./Vehicle.js"

export default class OrderVehicle {
    constructor(vehicle) {
        if (!(vehicle instanceof Vehicle)) {
            throw new Error("vehicle must extend Vehicle")
          }
    }
}