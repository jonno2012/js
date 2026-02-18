import PaymentsAbstract from './PaymentsAbstract.js';

export default class StripePayments extends PaymentsAbstract {

    constructor(compositionsLogger) {
        super();
        this.logger = compositionsLogger; // demenstrating the composition pattern which is often used in js classes
    }

    static version = '1.0';

    static getVersion() {
        return this.version
    }

    makePayment(amount) {
        console.log(`Stripe payment of ${amount} made`);
    }
}