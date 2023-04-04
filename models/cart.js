const Sequelize = require("sequelize");

// cart table
class Cart extends Sequelize.Model {
    static initiate(sequelize) {
        Cart.init({
            cartId: {
                type          : Sequelize.INTEGER,
                primaryKey    : true,
                autoIncrement : true,
            },
            totalPrice: {
                type          : Sequelize.STRING(100),
                allowNull     : true,
            },
        }, { // options
            sequelize,
            timestamps  : true,
            underscored : false,
            paranoid    : false,
            modelName   : "Cart",
            tableName   : "carts",
            charset     : "utf8",
            collate     : "utf8_general_ci",
        });
    }
};

module.exports = Cart;