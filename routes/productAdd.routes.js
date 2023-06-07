const express = require("express");
const router = express.Router();

const ProductAddController = require("../controllers/productAdd.controller");
const productAddController = new ProductAddController();
const { upload } = require("../multer");

router.post(
    "/productAdd",
    upload.single("file"),
    productAddController.productAdd
);

module.exports = router;