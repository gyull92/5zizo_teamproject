const PaymentListService = require("../services/paymentList.service");

class PaymentListController {
    paymentListService = new PaymentListService();

    findPaymentAll = async (req, res, next) => {
        try {
            const { userId } = req.params;
            const paymentList = await this.paymentListService.findPaymentAll(userId);

            res.status(201).json({ data: paymentList });
        } catch (error) {
            res.status(400).json({ errorMessage: "결제 내역 조회에 실패하였습니다" });
        };
    };
};

module.exports = PaymentListController;