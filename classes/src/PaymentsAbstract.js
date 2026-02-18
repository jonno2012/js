export default class PaymentsAbstract {
    constructor() {
        if (new.target === PaymentsAbstract) {
            throw new Error("Cannot instantiate abstract class directly");
        }
    }

    makePayment(amount) {
        throw new Error("Method not implemented.");
    }
}