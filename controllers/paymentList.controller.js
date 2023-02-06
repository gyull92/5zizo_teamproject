const PaymentListService = require("../services/paymentList.service");

class PaymentListController {
    PaymentListService = new PaymentListService();

    findPaymentAll = async (req, res, next) => {
        try {
            const PaymentList = await this.PaymentListService.findPaymentAll();

            res.status(201).json({ data: PaymentList });
        } catch (error) {
            res.status(400).json({ errorMessage: "결제 내역 조회에 실패하였습니다" });
        };
    };
};

module.exports = PaymentListController;