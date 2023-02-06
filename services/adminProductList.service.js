const AdminProductListRepository = require("../repositories/adminProductList.repository");

class AdminProductListService {
    adminProductListRepository = new AdminProductListRepository();

    findProductList = async () => {
        try {
            console.log(2222222222222222)
            const productList = await this.adminProductListRepository.findProductList();

            return productList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = AdminProductListService;