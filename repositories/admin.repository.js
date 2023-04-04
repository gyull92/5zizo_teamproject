const { Product } = require("../models");
const { User }    = require("../models");
const { Cart }    = require("../models");

class AdminRepository {
    
// Admin's product Repository CRUD ---------------------------------------------------------------  
    productAdd = async (image, name, info, price) => {
        try {
            const productAddData = await Product.create({
                image,
                name,
                info,
                price
            });
            return productAddData;
        } catch (error) {
            throw error;
        };
    };

    findProductAll = async () => {
        try {
            const productList = await Product.findAll();
            return productList;
        } catch (error) {
            throw error;
        };
    };
    
    findProductList = async () => {
        try {
            const productList = await Product.findAll({});
            return productList;
        } catch (error) {
            throw error;
        };
    };

    
    productEdit = async (image, name, info, price, productId) => {
        try {
            const productEditData = await Product.update({
                image,
                name,
                info,
                price,
            }, {
                where: { productId: productId },
            });
            return productEditData;
        } catch (error) {
            throw error;
        };
    };

    productDelete = async (productId) => {
        try {
            const productDeleteData = await Product.destroy({where: { productId: productId }});
            await Cart.destroy({where: { productId: productId }});
                return productDeleteData;
        } catch (error) {
            throw error;
        };
    };
// -----------------------------------------------------------------------------------------------
    
    findMemberList = async () => {
        try {
            const memberList = await User.findAll();
            return memberList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = AdminRepository;