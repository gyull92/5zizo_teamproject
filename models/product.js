const Sequelize = require("sequelize");

// product table
class Product extends Sequelize.Model {
    static initiate(sequelize) {
        Product.init({
            productId: {
                type          : Sequelize.INTEGER,
                primaryKey    : true,
                autoIncrement : true
            },
            image: {
                type          : Sequelize.STRING,
                allowNell     : false,
            },
            name: {
                type          : Sequelize.STRING,
                allowNull     : false,
            },
            info: {
                type          : Sequelize.STRING,
                allowNell     : false,
            },
            price: {
                type          : Sequelize.INTEGER,
                allowNell     : false,
            }
        }, { // options
            sequelize,
            timestamps  : true,
            underscored : false,
            paranoid    : false,
            modelName   : "Product",
            tableName   : "products",
            charset     : "utf8",
            collate     : "utf8_general_ci",
        });
    }
    static associate(db) {        
        db.Product.belongsToMany(db.OrderInfo, {  
           foreignKey : 'orderInfoId',   
           as         : 'orderInfoId',
           through    : 'orderProducts',
        });
    }
};

module.exports = Product;