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
                type          : Sequelize.STRING(40),
                allowNull     : true,
                unique        : true,
            },
            password: {
                type          : Sequelize.STRING(100),
                allowNell     : true,
            },
            phone: {
                type          : Sequelize.STRING(30),
                allowNell     : true,
            },
            userType: {
                type          : Sequelize.STRING(30),
                allowNell     : false,
            },
            provider: {
                type          : Sequelize.ENUM("local", "kakao"),
                allowNull     : false,
                defaultValue  : "local",
            },
            snsId: {   
                type          : Sequelize.STRING(30),
                allowNull     : true,              
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

module.exports = User;