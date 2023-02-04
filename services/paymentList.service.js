const PaymentListRepository = require("../repositories/paymentList.repository");

class PaymentListService {
    paymentListRepository = new PaymentListRepository();

    findPaymentAll = async () => {
        try {
            const PaymentList = await this.paymentListRepository.findPaymentAll();

            return PaymentList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = PaymentListService;