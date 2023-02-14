const Sequelize = require('sequelize');
const fs = require('fs'); 
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.json')[env];
const db = {}; 
const sequelize = new Sequelize(  
    config.database, config.username, config.password, config,
);

db.sequelize = sequelize;

const basename = path.basename(__filename); 
fs
  .readdirSync(__dirname) 
  .filter(file => {       
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {      
    const model = require(path.join(__dirname, file));
    // console.log(file, model.name); 
    db[model.name] = model;        
    model.initiate(sequelize);     
  });                              

Object.keys(db).forEach(modelName => { 
  // console.log(db, modelName);      
  if (db[modelName].associate) {
    db[modelName].associate(db);   
  }
});


// const User = require('./user');
// const Cart = require('./cart');
// const OrderInfo = require('./orderInfo');
// const Product   = require('./product');
// const OrderProduct  = require('./orderProduct');

// db.User = User;
// db.Cart = Cart;
// db.OrderInfo = OrderInfo;
// db.Product   = Product;
// db.OrderProduct = OrderProduct

// // 설정한 initiate, associate를 한번식 호출 해줘야하기때문에 있다.

// User.initiate(sequelize);
// Cart.initiate(sequelize);
// OrderInfo.initiate(sequelize);
// OrderProduct.initiate(sequelize);

// OrderInfo.associate(db);
// Product.associate(db);

module.exports = db;