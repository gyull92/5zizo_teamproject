const { product } = require("../models");

class ProductListRepository {
    findProductAll = async () => {
        try {
            const productList = await product.findAll();
            console.log(productList)
            return productList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = ProductListRepository;