import Car from './src/Car.js';
import StripePayments from './src/StripePayments.js';
import Composition from './src/Composition.js';
import OrderVehicle from './src/OrderVehicle.js';

let car = new Car('Toyota', 'Corolla', 2020, 'Red', '1234567890');

console.log(car.getMake());
console.log(car.getModel());
console.log(car.getYear());
console.log(car.getColor());
console.log(car.getSerialNumber());

const paymentsClassVersion = StripePayments.getVersion();
console.log('paymentsClassVersion', paymentsClassVersion)

const stripePayments = new StripePayments(new Composition);
stripePayments.logger.compose('test');

let VehicleOrderer = new OrderVehicle(car);