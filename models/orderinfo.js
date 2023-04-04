const Sequelize = require("sequelize");

// OrderInfo table
class OrderInfo extends Sequelize.Model {
    static initiate(sequelize) {
        OrderInfo.init({
            orderInfoId: {
                type          : Sequelize.INTEGER,
                primaryKey    : true,
                autoIncrement : true
            },
            userId: {
                type          : Sequelize.INTEGER,
                allowNull     : false,
            },
            address: {
                type          : Sequelize.STRING,
                allowNell     : false,
            },
            phone: {
                type          : Sequelize.INTEGER,
                allowNell     : false,
            },
            state: {
                type          : Sequelize.INTEGER,
                allowNell     : false,
            }
        }, { // options
            sequelize,
            timestamps  : true,
            underscored : false,
            paranoid    : false,
            modelName   : "OrderInfo",
            tableName   : "orderInfos",
            charset     : "utf8",
            collate     : "utf8_general_ci",
        });
    }
    static associate(db) {        
        db.OrderInfo.belongsToMany(db.Product, {  
           foreignKey : 'productId',   
           as         : 'productId',
           through    : 'orderProducts',
        });
    }
};

module.exports = OrderInfo;