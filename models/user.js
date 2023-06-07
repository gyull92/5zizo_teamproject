const Sequelize = require("sequelize");

// user table
class User extends Sequelize.Model {
    static initiate(sequelize) {
        User.init({
            userId: {
                type          : Sequelize.INTEGER,
                primaryKey    : true,
                autoIncrement : true,
            },
            email: {
                type          : Sequelize.STRING,
                allowNull     : false,
                unique        : true,
            },
            password: {
                type          : Sequelize.STRING,
                allowNell     : false,
            },
            phone: {
                type          : Sequelize.STRING,
                allowNell     : false,
            },
            userType: {
                type          : Sequelize.INTEGER,
                allowNell     : false,
            },
        }, { // options
            sequelize,
            timestamps  : true,
            underscored : false,
            paranoid    : false,
            modelName   : "User",
            tableName   : "users",
            charset     : "utf8",
            collate     : "utf8_general_ci",
        });
    }
};