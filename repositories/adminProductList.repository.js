const { product } = require("../models");

class AdminProductListRepository {
    findProductList = async () => {
        try {
            console.log(333333333333333)
            const productList = await product.findAll();
            console.log(productList)
            return productList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = AdminProductListRepository;