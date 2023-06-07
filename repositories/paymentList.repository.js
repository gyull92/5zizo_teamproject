const { OrderInfo, Product, Orderproduct } = require("../models");

class PaymentListRepository {
    findPaymentAll = async (userId) => {
        try {
            const paymentList = await OrderInfo.findAll({
                where: { userId: userId },
                // include: [
                //     {
                //         where: { orderInfoId: orderInfoId },
                //         model: Orderproduct,
                //         attributes: ["productId"],
                //     },
                    // {
                    //     where: { productId: productId },
                    //     models: Product,
                    //     attributes: ["image", "name", "info", "price"],
                    // },
                // ],
            });

            return paymentList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = PaymentListRepository;