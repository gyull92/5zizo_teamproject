const { Product } = require("../models");

class ProductAddRepository {
    productAdd = async (image, name, info, price) => {
        try {
            const productAddData = await Product.create({
                image,
                name,
                info,
                price
            });

            return productAddData;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = ProductAddRepository;