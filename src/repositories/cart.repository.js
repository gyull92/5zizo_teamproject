const { Product, Cart } = require('../models');
const { Op } = require('sequelize');

class CartRepository {

// General's cart Repository CRUD ----------------------------------------------------------
    findOne = async (userId, productId) => {
        // console.log('Repository_userId-------', userId)
        const findCart = await Cart.findOne({ where: { userId, productId }});
        return findCart;
    };

    modQuantity = async (userId, productId, quantity) => {
        await Cart.update( { quantity }, { where: [{userId, productId: productId}] });
    };

    createCart = async(userId, productId, quantity) => {
        await Cart.create( { userId, productId, quantity });
    };

    findAll = async (userId) => {
        const findAlldata = await Cart.findAll({ where: { userId }})
        console.log('repository_findAlldata---------', findAlldata);
        return findAlldata;
    };

    findProductAll = async(productIds) => {
        const findProductAllData = await Product.findAll({ where: { productId: productIds }});
        return findProductAllData;
    };

    deleteOne = async(userId, productId) => {
        await Cart.destroy({where: { userId, productId }});
    };

    deleteAll = async (userId) => {
        await Cart.destroy({ where: { userId } }); 
    };
// -----------------------------------------------------------------------------------------------

    deleteChecked = async(userId, checkedList) => {
        await Cart.destroy({
            where: { productId : { userId, [Op.in]: checkedList }}   // 배열 요소 중 하나
        });
    };
};

module.exports = CartRepository;