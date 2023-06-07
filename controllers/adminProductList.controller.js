const AdminProductListService = require("../services/adminProductList.service");

class AdminProductListController {
    adminProductListService = new AdminProductListService();

    findProductList = async (req, res, next) => {
        try {

            const productList = await this.adminProductListService.findProductList();

            res.status(201).json({ data: productList });
        } catch (error) {
            res.status(400).json({ errorMessage: "상품 목록 조회에 실패하였습니다." });
        };
    };
};

module.exports = AdminProductListController;