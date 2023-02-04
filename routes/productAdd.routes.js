const express = require("express");
const router = express.Router();

const ProductAddController = require("../controllers/productAdd.controller");
const productAddController = new ProductAddController();

router.post(
    "/productAdd",
    productAddController.productAdd
);

module.exports = router;