const express = require("express");
const router = express.Router();

const ProductEditController = require("../controllers/productEdit.controller");
const productEditController = new ProductEditController();

router.put(
    "/productEdit/:productId",
    productEditController.productEdit
);

module.exports = router;