'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orderProduct.init({
    productId: DataTypes.INTEGER,
    orderInfoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orderProduct',
  });
  return orderProduct;
};