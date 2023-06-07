const AdminRepository = require("../repositories/admin.repository");

class AdminService {

// Admin's product Sevice CRUD ---------------------------------------------------------------  
    adminRepository = new AdminRepository();

    productAdd = async (image, name, info, price) => {
        try {
            const productAddData = await this.adminRepository.productAdd(image, name, info, price);
            return productAddData;
        } catch (error) {
            throw error;
        };
    };

    findProductAll = async () => {
        try {
            const productList = await this.adminRepository.findProductAll();
            return productList;
        } catch (error) {
            throw error;
        };
    };

    findProductList = async () => {
        try {
            const productList = await this.adminRepository.findProductList();
            return productList;
        } catch (error) {
            throw error;
        };
    };

    productEdit = async (image, name, info, price, productId) => {
        try {
            console.log("서비스 productEdit------------")
            const productEditData = await this.adminRepository.productEdit(image, name, info, price, productId);
            return productEditData;
        } catch (error) {
            throw error;
        };
    };

    productDelete = async (productId) => {
        try {
            const productDeleteData = await this.adminRepository.productDelete(productId);
            return productDeleteData;
        } catch (error) {
            throw error;
        };
    };
// -----------------------------------------------------------------------------------------------      
    findMemberList = async () => {
        try {
            const memberList = await this.adminRepository.findMemberList();
            return memberList;
        } catch (error) {
            throw error;
        };
    };
};

module.exports = AdminService;