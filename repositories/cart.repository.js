// repositories/cart.repository.js

const { product, cart } = require('../models');
const { Op } = require('sequelize');

class CartRepository {
    findOne = async(
        // userId,
        productId,
        ) => {
        const findCart = await cart.findOne({
            where: {
                // userId,
                productId,
            },
        });

        return findCart;
    };

    modQuantity = async(
        // userId,
        productId, 
        quantity
        ) => {
        await cart.update(
            {quantity: quantity},
            {where: 
                // [Op.and]:
                [{productId: productId},
                // {userId: userId},
                ] },
            );
    };

    createCart = async(
        // userId,
        productId,
        quantity,
    ) => {
        await cart.create({
            // userId : userId,
            productId : productId,
            quantity : quantity,
        })
    };

    findAll = async(
        // userId,
    ) => {
        const findAlldata = await cart.findAll({
            // where: {
            //     userId,
            // }
        })

        return findAlldata;
    };

    findProductAll = async(productIds) => {
        const findProductAllData = await product.findAll({
            where: {
                productId: productIds,
            },
        })

        return findProductAllData;
    };

    deleteOne = async(
        // userId,
        productId,
        ) => {
            await cart.destroy({
                where: {
                    // userId,
                    productId,
                },
            });
    };

    deleteAll = async(
        // userId,
    ) => {
        await cart.destroy({
            where: {
                // userId,
            },
        });
    };

    deleteChecked = async(
        // userId,
        checkedList,
    ) => {
        await cart.destroy({
            where: {
                // userId,
                productId : { [Op.in]: checkedList }, // 배열 요소 중 하나
            }
        });
    };

}

module.exports = CartRepository;