// const express = require("express");
// const router = express.Router();

// const { product } = require('../models');

// const cartRouter = require('./cart.router');

// router.use('/', cartRouter);

// // 상품 등록
// router.post('/product', async (req, res) => {
//     try {
//         const { image, name, info, price } = req.body;
//         console.log(image);

//         const createdProduct = await product.create({ image, name, info, price });

//         res.status(201).json({products: createdProduct});
//     } catch(e){
//         console.log(e);
//     };
// });

// 모든 상품 가져오기
// router.get('/product', async (req, res) => {
//     const products = await product.findAll({
//         order: [["createdAt", "DESC"]],
//         attributes: { exclude: ['createdAt', 'updatedAt'] }
//     });

//     res.send({ result: 'success', data: products });
// });

// module.exports = router;