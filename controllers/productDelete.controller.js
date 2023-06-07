const ProductDeleteService = require("../services/productDelete.service");

class ProductDeleteController {
    productDeleteService = new ProductDeleteService();

    productDelete = async (req, res, next) => {
        try {
            const { productId } = req.params;
            const productDeleteData = await this.productDeleteService.productDelete(productId);

            res.status(201).json({ data: productDeleteData });
        } catch (error) {
            res.status(400).json({ errorMessage: "상품 삭제에 실패하였습니다." });
        };
    };
};

module.exports = ProductDeleteController;