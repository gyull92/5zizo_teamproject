// controllers/cart.controller.js

const CartService = require('../services/cart.service');

class CartController {
    cartService = new CartService();

    putProduct = async(req, res) => {
        try {
            // const { userId } = res.locals.user;
            const { productId } = req.params;

            const existsCart = await this.cartService.findOne(
                // userId,
                productId,
                );

            if(existsCart) {
                await this.cartService.modQuantity(
                    // userId,
                    productId, 
                    existsCart.quantity+1
                    );
            } else {
                await this.cartService.createCart(
                    // userId,
                    productId,
                    1,
                );
            }

            res.send({result: 'success'});

        } catch(e) {
            console.log(e);
            res.status(400).json({
                errorMessage: '장바구니 담기에 실패했습니다.'
            });
        }

    };

    getCartList = async(req, res) => {
        // const { userId } = res.locals.user;

        const cart = await this.cartService.findCartAll(
            // userId,
        );

        res.send({ cart: cart['cart'] });
    };

    modOneCart = async(req, res) => {
        // const { userId } = res.locals.user;
        const { productId } = req.params;
        const { modQuantity } = req.body;

        const existsCart = await this.cartService.findOne(
            // userId,
            productId,
            );
        
        if(existsCart) {
            await this.cartService.modQuantity(
                // userId,
                productId, 
                modQuantity
                );
        }
        
        res.send({result: 'success'});
    };

    deleteOneCart = async(req, res) => {
        // const { userId } = res.locals.user;
        const { productId } = req.params;

        await this.cartService.deleteOne(
            // userId,
            productId,
        );

        res.send({result: 'success'});
    };

    deleteAllCart = async(req, res) => {
        // const { userId } = res.locals.user;

        await this.cartService.deleteAll(
            // userId,
        );

        res.send({result: 'success'});
    };

    deleteCheckBox = async(req, res) => {
        // const { userId } = res.locals.user;
        const { checkedList } = req.body;

        if(checkedList.length === 1){
            await this.cartService.deleteOne(
                // userId,
                checkedList
                );
            return res.send({result: 'success'});
        }

        await this.cartService.deleteChecked(
            // userId,
            checkedList,
        );

        return res.send({result: 'success'});

    };

}


module.exports = CartController;