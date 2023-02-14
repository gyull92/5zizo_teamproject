const express = require("express");
const router  = express.Router();

const PaymentListController = require("../src/controllers/paymentList.controller");
const paymentListController = new PaymentListController();

router.get(
    "/paymentList",
    paymentListController.findPaymentAll
);

module.exports = router;