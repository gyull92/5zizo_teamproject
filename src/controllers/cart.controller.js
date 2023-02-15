const CartService = require('../services/cart.service');

class CartController {

// General's cart Controller CRUD ----------------------------------------------------------
    cartService = new CartService();

    putProduct = async(req, res, next) => {
        try {
            const userId = req.user.userId;
            const { productId } = req.params;

            const existsCart = await this.cartService.findOne(userId, productId);
            if (existsCart) {
                await this.cartService.modQuantity(userId, productId, existsCart.quantity + 1)
            } 
            else {
                await this.cartService.createCart(userId, productId, 1);
            }

            res.status(200).send({ result: 'success' });
        } 
        catch(err) {
            console.error(err);
            res.status(404).json({ errorMessage: '장바구니 담기에 실패했습니다.' });
        }
    };

    getCartList = async(req, res, next) => {
        try {
            const userId = req.user.userId;
            const cart = await this.cartService.findCartAll(userId);
            res.status(200).json({ cart: cart['cart'] });
        } 
        catch(err) {
            console.error(err);
            res.status(404).json({ errorMessage: '장바구니 불러오기 실패' });
            next(err);
        }
    };

    modOneCart = async(req, res, next) => {
        try {
            const userId = req.user.userId;
            const { productId }   = req.params;
            const { modQuantity } = req.body;
            const existsCart = await this.cartService.findOne(userId, productId);

            if(existsCart) {
                await this.cartService.modQuantity(userId, productId, modQuantity);
            }
            res.status(200).json({result: 'success'});
        }
        catch(err) {
            console.error(err);
            res.status(400).json({ errorMessage: '상품수량 변경 실패' });
        }
    };

    deleteOneCart = async(req, res, next) => {
        try {
            const userId = req.user.userId;
            const { productId } = req.params;
            await this.cartService.deleteOne(userId, productId);
            res.status(204).send({ result: 'success' });
        }
        catch(err) {
            console.error(err);
            res.status(400).json({ errorMessage: '장바구니 상품삭제 실패' });
        }
    };

    deleteAllCart = async(req, res, next) => {
        try {
            const userId = req.user.userId;
            await this.cartService.deleteAll(userId);
            res.status(204).send({result: 'success'});
        }
        catch(err) {
            console.error(err);
            res.status(400).json({ errorMessage: '장바구니 비우기 실패' });
        }
    };
// -----------------------------------------------------------------------------------------------

    deleteCheckBox = async(req, res, next) => {
        try {
            const userId = req.user.userId;
            const { checkedList } = req.body;
            if(checkedList.length === 1){
                await this.cartService.deleteOne(userId, checkedList);
                return res.status(204).send({result: 'success'});
            }
            await this.cartService.deleteChecked(checkedList);
            return res.status(204).send({result: 'success'});
        }
        catch(err) {
            console.error(err);
            res.status(400).json({ errorMessage: err.errorMessage });
        }
    };
};

module.exports = CartController;