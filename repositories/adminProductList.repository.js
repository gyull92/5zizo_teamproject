const { product } = require("../models");

class AdminProductListRepository {
    findProductList = async () => {
        try {
            const productList = await product.findAll();

            return productList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = AdminProductListRepository;