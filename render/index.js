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


module.exports = router;