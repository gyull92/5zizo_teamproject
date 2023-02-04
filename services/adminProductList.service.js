const AdminProductListRepository = require("../repositories/adminProductList.repository");

class AdminProductListService {
    adminProductListRepository = new AdminProductListRepository();

    findProductList = async () => {
        try {
            const productList = await this.adminProductListRepository.findProductList();

            return productList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = AdminProductListService;