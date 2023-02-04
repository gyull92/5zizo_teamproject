const ProductListRepository = require("../repositories/productList.repository");

class ProductListService {
    productListRepository = new ProductListRepository();

    findProductAll = async () => {
        try {
            const productList = await this.productListRepository.findProductAll();

            return productList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = ProductListService;
