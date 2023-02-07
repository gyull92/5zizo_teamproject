const ProductListRepository = require("../repositories/productList.repository");

class ProductListService {
    productListRepository = new ProductListRepository();

    findProductAll = async (page, pageSize) => {
        try {
            let start = 0

            if(page <= 0) {
                page = 1
            } else {
                start = 0 + (page - 1) * pageSize
            }
            const productList = await this.productListRepository.findProductAll(start, pageSize);

            return productList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = ProductListService;
