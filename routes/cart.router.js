const express = require("express");
const router = express.Router();

const { isLoggedIn }  = require('../middlewares/auth')
const { isGeneralIn } = require('../middlewares/auth');

const CartController = require('../src/controllers/cart.controller');
const cartController = new CartController();

// User's Cart --------------------------------------------------------------- 

// 장바구니에 상품 담기
// POST /general/cart/:productId
router.post('/cart/:productId',        
    isLoggedIn, 
    isGeneralIn, 
    cartController.putProduct
 );      

// 내가 가진 장바구니 목록을 전부 불러오기
// GET /general/cartList
router.get('/cartList',                 
    isLoggedIn, 
    isGeneralIn, 
    cartController.getCartList
);             

// 장바구니 특정 상품 수량 변경
// PATCH  /general/cart/:productId
router.patch('/cart/:productId', 
    isLoggedIn, 
    isGeneralIn, 
    cartController.modOneCart
);     

// 장바구니 특정 상품 삭제
// DELETE /general/cart/:productId
router.delete('/cart/:productId', 
    isLoggedIn, 
    isGeneralIn, 
    cartController.deleteOneCart
); 

// 장바구니 상품 모두 삭제
// DELETE /general/cart
router.delete('/cart', 
    isLoggedIn, 
    isGeneralIn, 
    cartController.deleteAllCart
);            

// 장바구니 선택항목(check box) 삭제
// DELETE /general/del/checked
router.delete('/del/checked', 
    isLoggedIn, 
    isGeneralIn, 
    cartController.deleteCheckBox
);   

module.exports = router;