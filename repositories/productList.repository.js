const { Product } = require("../models");

class ProductListRepository {
    findProductAll = async (offset, limit) => {
        try {
            const productList = await Product.findAll({
                raw: true,
                offset: offset,
                limit: limit
            });

            return productList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = ProductListRepository;