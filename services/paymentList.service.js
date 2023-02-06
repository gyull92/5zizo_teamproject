const PaymentListRepository = require("../repositories/paymentList.repository");

class PaymentListService {
    paymentListRepository = new PaymentListRepository();

    findPaymentAll = async (userId) => {
        try {
            const paymentList = await this.paymentListRepository.findPaymentAll(userId);

            return paymentList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = PaymentListService;