const ProductAddRepository = require("../repositories/productAdd.repository");

class ProductAddService {
    productAddRepository = new ProductAddRepository();

    productAdd = async (image, name, info, price) => {
        try {
            const productAddData = await this.productAddRepository.productAdd(image, name, info, price);

            return productAddData;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = ProductAddService;