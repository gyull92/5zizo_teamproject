'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.user.belongsTo(models.cart, { foreignKey: 'cartId' });
      // models.user.belongsTo(models.orderinfo, { foreignKey: 'orderinfoId' });
    }
  }
  user.init({
    userId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    userType: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};