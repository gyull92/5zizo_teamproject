const ProductDeleteRepository = require("../repositories/productDelete.repository");

class ProductDeleteService {
    productDeleteRepository = new ProductDeleteRepository();

    productDelete = async (productId) => {
        try {
            const productDeleteData = await this.productDeleteRepository.productDelete(productId);

            return productDeleteData;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = ProductDeleteService;