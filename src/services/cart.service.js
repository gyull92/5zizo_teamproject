const CartRepository = require('../repositories/cart.repository');

class CartService {

// General's cart Service CRUD ----------------------------------------------------------
    cartRepository = new CartRepository();

    findOne = async(userId, productId) => {
        const findCart = await this.cartRepository.findOne(userId, productId);
        return findCart;
    };

    modQuantity = async(userId, productId, quantity) => {
        const newQuantity = await this.cartRepository.modQuantity(userId, productId, quantity);
        return newQuantity;
    };

    createCart = async(userId, productId, quantity) => {
        const createCartData = await this.cartRepository.createCart(userId, productId, quantity);
        return createCartData;
    }

    findCartAll = async(userId) => {
        const carts = await this.cartRepository.findAll(userId);
        // const productId = carts.productId;
        console.log('service_carts---------', carts);
    
        // console.log('productId---------', productId);
        const productIds = carts.map((c) => c.productId);
        console.log('service_productIds_carts.map---------', productIds);

        const productsKeyById = await this.cartRepository.findProductAll(productIds)
            .then((products) => products.reduce((prev, p) => ({...prev, [p.productId] : p}),{}));
        console.log('service_productIds_productsKeyById---------', productsKeyById);

        return {cart: carts.map((c) => ({
                quantity: c.quantity,
                products: productsKeyById[c.productId]
            }))
        }
        // return carts
    };

    deleteOne = async(userId, productId) => {
        await this.cartRepository.deleteOne(userId, productId);
    };

    deleteAll = async(userId) => {
        await this.cartRepository.deleteAll(userId);
    };
// -----------------------------------------------------------------------------------------------

    deleteChecked = async(userId, checkedList) => {
        await this.cartRepository.deleteChecked(userId, checkedList);
    };
}

module.exports = CartService;