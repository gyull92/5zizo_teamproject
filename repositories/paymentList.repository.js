const { orderinfo, product, orderproduct } = require("../models");

class PaymentListRepository {
    findPaymentAll = async (userId) => {
        try {
            const paymentList = await orderinfo.findAll({
                where: { userId: userId },
                include: [
                    {
                        // where: { orderinfoId: orderinfoId },
                        // model: orderproduct,
                        // attributes: ["productId"],
                    },
                    // {
                    //     where: { productId: productId },
                    //     models: product,
                    //     attributes: ["image", "name", "info", "price"],
                    // },
                ],
            });

            return paymentList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = PaymentListRepository;