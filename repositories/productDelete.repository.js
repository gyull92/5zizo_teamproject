const { Product } = require("../models");

class ProductDeleteRepository {
    productDelete = async (productId) => {
        try {
            const productDeleteData = await Product.destroy({
                where: { productId: productId }
            });
            return productDeleteData;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = ProductDeleteRepository;