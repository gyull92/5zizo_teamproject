const { orderInfo } = require("../models");

class PaymentListRepository {
    findPaymentAll = async () => {
        try {
            const paymentList = await orderInfo.findAll({});

            return paymentList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = PaymentListRepository;