const AdminService = require("../services/admin.service");

class AdminController {

// Admin's product Controller CRUD ---------------------------------------------------------------  
    adminService = new AdminService();

    productAdd = async (req, res, next) => {
        try {
            const { name, info, price } = req.body;
            const imgPath = req.file.path;
            const image = imgPath.split("\\")[3];
            
            const productAddData = await this.adminService.productAdd(image, name, info, price);

            res.status(201).json({ data: productAddData });
        } catch (error) {
            console.error(error)
            res.status(400).json({ errorMessage: error.message });
        };
    };

    findProductAll = async (req, res, next) => {
        try {
            const productList = await this.adminService.findProductAll();

            res.status(201).json({ data: productList });
        } catch (error) {
            console.error(error)
            res.status(400).json({ errorMessage: error.message });
        };
    };

    findProductList = async (req, res, next) => {
        try {
            const productList = await this.adminService.findProductList();

            res.status(201).json({ data: productList });
        } catch (error) {
            console.error(error)
            res.status(400).json({ errorMessage: error.message });
        };
    };

    productEdit = async (req, res, next) => {
        try {
            const { name, info, price } = req.body;
            const { productId } = req.params;

            const imgPath = req.file.path;
            const image   = imgPath.split("\\")[3];

            const productEditData = await this.adminService.productEdit(image, name, info, price, productId);

            res.status(201).json({ data: productEditData });
        } catch (error) {
            console.error(error)
            res.status(400).json({ errorMessage: error.message });
        };
    };

    productDelete = async (req, res, next) => {
        try {
            const { productId } = req.params;
            const productDeleteData = await this.adminService.productDelete(productId);

            res.status(201).json({ result: 'success', data: productDeleteData });
        } catch (error) {
            console.error(error)
            res.status(400).json({ errorMessage: error.message });
        };
    };   
// -----------------------------------------------------------------------------------------------

    findMemberList = async (req, res, next) => {
        try {
            const memberList = await this.adminService.findMemberList();

            res.status(201).json({ data: memberList });
        } catch (error) {
            console.error(error)
            res.status(400).json({ errorMessage: error.message });
        };
    };
};

module.exports = AdminController;