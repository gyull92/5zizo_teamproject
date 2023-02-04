const { product } = require("../models");

class ProductListRepository {
    findProductAll = async () => {
        try {
            const productList = await product.findAll();

            return productList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = ProductListRepository;