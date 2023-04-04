const express = require("express");
const router = express.Router();

const ProductListController = require("../controllers/productList.controller");
const productListController = new ProductListController();

router.get(
    "/productList/:page",
    productListController.findProductAll
);

module.exports = router;