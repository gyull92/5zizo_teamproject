const { Product } = require("../models");
const { User }    = require("../models");
const { Cart }    = require("../models");

class AdminRepository {
    
// Admin's product Repository CRUD ---------------------------------------------------------------  
    productAdd = async (image, name, info, price) => {
        try {
            const productAddData = await Product.create({ image, name, info, price });
            return productAddData;
        } catch (error) {
            throw new Error(error.message);
            // ex) throw new Error(`ValidationError: Failed to update user name: ${error.message}`);
        };
    };

    findProductAll = async () => {
        try {
            const productList = await Product.findAll();
            return productList;
        } catch (error) {
            throw new Error(error.message);
        };
    };
    
    findProductList = async () => {
        try {
            const productList = await Product.findAll({});
            return productList;
        } catch (error) {
            throw new Error(error.message);
        };
    };

    
    productEdit = async (image, name, info, price, productId) => {
        try {
            const productEditData = await Product.update({ image, name, info, price }, {where: { productId: productId } });
            return productEditData;
        } catch (error) {
            throw new Error(error.message);
        };
    };

    productDelete = async (productId) => {
        try {
            const productDeleteData = await Product.destroy({where: { productId: productId }});
            await Cart.destroy({where: { productId: productId }});
                return productDeleteData;
        } catch (error) {
            throw new Error(error.message);
        };
    };
// Admin's ---------------------------------------------------------------------------------------
    
    findMemberList = async () => {
        try {
            const memberList = await User.findAll();
            return memberList;
        } catch (error) {
            throw new Error(error.message);
        };
    };
};

module.exports = AdminRepository;