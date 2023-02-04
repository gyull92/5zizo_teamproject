const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try {
      res.render('productList');
    } catch (err) {
      console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
      res.render('error');
    }
  });

router.get('/cartlist', (req, res) => {
  try {
    res.render('cartList');
  } catch (err) {
    console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
    res.render('error');
  }
});

module.exports = router;