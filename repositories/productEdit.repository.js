const { Product } = require("../models");

class ProductEditRepository {
    productEdit = async (image, name, info, price, productId) => {
        try {
            const productEditData = await Product.update({
                image,
                name,
                info,
                price,
            }, {
                where: { productId: productId },
            });
            return productEditData;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = ProductEditRepository;