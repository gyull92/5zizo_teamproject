const ProductListService = require("../services/productList.service");

class ProductListController {
    productListService = new ProductListService();

    findProductAll = async (req, res, next) => {
        try {
            const productList = await this.productListService.findProductAll();

            res.status(201).json({ data: productList });
        } catch (error) {
            res.status(400).json({ errorMessage: "상품 목록 조회에 실패하였습니다." });
        };
    };
};

module.exports = ProductListController;