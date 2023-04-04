const express = require("express");
const router = express.Router();

const { isLoggedIn }  = require('../middlewares/auth')
const { isGeneralIn } = require('../middlewares/auth');
const { renderCart } = require('../controllers/pages.controller');

const CartController = require('../controllers/cart.controller');
const cartController = new CartController();

router.get('/cart' , isLoggedIn   , isGeneralIn , renderCart)                             // GET   /general/cart

// 장바구니에 상품 담기
router.post('/cart/:productId', isLoggedIn, isGeneralIn, cartController.putProduct);      //POST   /general/cart/:productId

// 내가 가진 장바구니 목록을 전부 불러오기
router.get('/cartList', isLoggedIn, isGeneralIn, cartController.getCartList);             //GET    /general/cartList

// 장바구니 특정 상품 수량 변경
router.patch('/cart/:productId', isLoggedIn, isGeneralIn, cartController.modOneCart);     //PATCH  /general/cart/:productId

// 장바구니 특정 상품 삭제
router.delete('/cart/:productId', isLoggedIn, isGeneralIn, cartController.deleteOneCart); //DELETE /general/cart/:productId

// 장바구니 상품 모두 삭제
router.delete('/cart', isLoggedIn, isGeneralIn, cartController.deleteAllCart);            //DELETE /general/cart

// 장바구니 선택항목(check box) 삭제
router.delete('/del/checked', isLoggedIn, isGeneralIn, cartController.deleteCheckBox);    //DELETE /general/del/checked

module.exports = router;