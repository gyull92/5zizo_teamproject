// routes/cart.route.js

const express = require("express");
const router = express.Router();

const CartController = require('../controllers/cart.controller');
const cartController = new CartController();

// 장바구니에 상품 담기
router.put('/cart/:productId', cartController.putProduct);

// 내가 가진 장바구니 목록을 전부 불러오기
router.get('/cart', cartController.getCartList);

// 장바구니 특정 상품 수량 변경
router.patch('/cart/:productId', cartController.modOneCart);

// 장바구니 특정 상품 삭제
router.delete('/cart/:productId', cartController.deleteOneCart);

// 장바구니 상품 모두 삭제
router.delete('/cart', cartController.deleteAllCart);

// 장바구니 선택항목(check box) 삭제
router.delete('/del/checked', cartController.deleteCheckBox);

module.exports = router;