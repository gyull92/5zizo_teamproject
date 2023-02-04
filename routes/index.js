const express = require("express");
const router = express.Router();

const productListRouter = require("./productList.routes");
const paymentListRouter = require("./paymentList.routes");
const adminProductListRouter = require("./adminProductList.routes");
const memberListRouter = require("./memberList.routes");
const productAddRouter = require("./productAdd.routes");
const productDeleteRouter = require("./productDelete.routes");
const productEditRouter = require("./productEdit.routes");

router.use(
    "/",
    productListRouter,
    paymentListRouter,
    adminProductListRouter,
    memberListRouter,
    productAddRouter,
    productDeleteRouter,
    productEditRouter,
);

module.exports = router;