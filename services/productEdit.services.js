const ProductEditRepository = require("../repositories/productEdit.repository");

class ProductEditService {
    productEditRepository = new ProductEditRepository();

    productEdit = async (image, name, info, price, productId) => {
        try {
            const productEditData = await this.productEditRepository.productEdit(image, name, info, price, productId);

            return productEditData;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = ProductEditService;