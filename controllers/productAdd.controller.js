const ProductAddService = require("../services/productAdd.service");

class ProductAddController {
    productAddService = new ProductAddService();

    productAdd = async (req, res, next) => {
        try {
            const { image, name, info, price } = req.body;

            const productAddData = await this.productAddService.productAdd(image, name, info, price);

            res.status(201).json({ data: productAddData });
        } catch (error) {
            res.status(400).json({ errorMessage: "사진, 이름, 정보, 가격 중 비어있는 칸이 있습니다" });
        };
    };
};

module.exports = ProductAddController;