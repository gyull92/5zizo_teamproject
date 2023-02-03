const express = require("express");
const router = express.Router();

const { Product, Cart } = require('../models');

// router.get('/', (req, res) => {
//     res.send('Hello World!')
// });

// 상품 등록
router.post('/product', async (req, res) => {
    try {
        const { image, name, info, price } = req.body;
        console.log(image);

        const createdProduct = await Product.create({ image, name, info, price });

        res.status(201).json({products: createdProduct});
    } catch(e){
        console.log(e);
    };
    
});

// 모든 상품 가져오기
router.get('/product', async (req, res) => {
    const products = await Product.findAll({
        order: [["createdAt", "DESC"]],
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    });

    res.send({ result: 'success', data: products });
});

// 장바구니에 상품 담기
router.put('/cart/:productId', async (req, res) => {
    // const { userId } = res.locals.user;
    const { productId } = req.params;

    const existsCart = await Cart.findOne({
        where: {
            // userId,
            productId,
        },
    });

    if(existsCart) {
        existsCart.quantity += 1
        await existsCart.save();
    } else {
        await Cart.create({
            productId : productId,
            quantity : 1,
        })
    }

    res.send({result: 'success'});
});

// 내가 가진 장바구니 목록을 전부 불러오기
router.get('/cart', async (req, res) => {
    // const { userId } = res.locals.user;

    const cart = await Cart.findAll({
        // where: {
        //     userId,
        // },
    });

    const productIds = cart.map((c) => c.productId);
    
    const productsKeyById = await Product.findAll({
        where: {
            productId: productIds,
        },
    }).then((products) => 
        products.reduce(
            (prev, p) => ({
                ...prev,
                [p.productId] : p,
            }),
            {}
        )
    )

    res.send({
        cart: cart.map((c) => ({
            quantity: c.quantity,
            products: productsKeyById[c.productId],
        })),
    });

});

// 장바구니 특정 상품 수량 변경
router.patch('/cart/:productId', async(req, res) => {
    const { productId } = req.params;
    const { modQuantity } = req.body;

    const existsCart = await Cart.findOne({
        where: {
            // userId,
            productId,
        },
    });

    existsCart.quantity = modQuantity;
    await existsCart.save();

    res.send({result: 'success'});

});

// 장바구니 특정 상품 삭제
router.delete('/cart/:productId', async(req, res) => {
    // const { userId } = res.locals.user;
    const { productId } = req.params;

    await Cart.destroy({
        where: {
            // userId,
            productId,
        },
    });

    res.send({result: 'success'});

});

// 장바구니 상품 모두 삭제
router.delete('/cart', async(req, res) => {
    // const { userId } = res.locals.user;

    await Cart.destroy({
        where: {
            // userId,
        },
    });

    res.send({result: 'success'});

});

module.exports = router;