const express = require("express");
const router = express.Router();

const ProductDeleteController = require("../controllers/productDelete.controller");
const productDeleteController = new ProductDeleteController();

router.delete(
    "/productDelete/:productId",
    productDeleteController.productDelete
);

module.exports = router;