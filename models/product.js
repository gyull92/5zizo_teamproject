'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.product.belongsTo(models.cart, { foreignKey: 'cartId' });
      // models.product.belongsTo(models.orderProduct, { foreignKey: 'productId' });
    }
  }
  product.init({
    productId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    info: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};