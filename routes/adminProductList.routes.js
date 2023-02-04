const express = require("express");
const router = express.Router();

const AdminProductListController = require("../controllers/adminProductList.controller");
const adminProductListController = new AdminProductListController();

router.get(
    "/adminProduct",
    adminProductListController.findProductList
);

module.exports = router;