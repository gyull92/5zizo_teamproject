const ProductEditService = require("../services/productEdit.services");

class ProductEditController {
    productEditService = new ProductEditService();

    productEdit = async (req, res, next) => {
        try {
            console.log("222222")
            const { image, name, info, price } = req.body;
            const { productId } = req.params;
            const productEditData = await this.productEditService.productEdit(image, name, info, price, productId);

            res.status(201).json({ data: productEditData });
        } catch (error) {
            res.status(400).json({ errorMessage: "사진,이름,정보,가격 중 비어있는 칸이 있습니다." });
        };
    };
};

module.exports = ProductEditController;