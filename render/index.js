const express = require("express");
const router = express.Router();

router.get("/productList", (req, res) => {
    res.render("productList.ejs");
});

router.get("/productAdd", (req, res) => {
    res.render("productAdd.ejs");
});

router.get("/userProfile", (req, res) => {
    res.render("userProfile.ejs");
});

router.get("/userProfileEdit", (req, res) => {
    res.render("userProfileEdit.ejs");
});

router.get("/productOrder", (req, res) => {
    res.render("productOrder.ejs");
});

router.get("/paymentList", (req, res) => {
    res.render("paymentList.ejs");
});

router.get("/userPage", (req, res) => {
    res.render("userPage.ejs");
});

module.exports = router;