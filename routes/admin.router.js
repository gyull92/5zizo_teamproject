const express = require("express");
const router  = express.Router();
const { isLoggedIn } = require('../middlewares/auth')
const { isAdminIn }  = require('../middlewares/auth');
const { upload } = require("../multer");

const AdminController = require("../controllers/admin.controller");
const adminController = new AdminController();

// Admin's product Routes CRUD --------------------------------------------------------------- 
router.post(
    "/productAdd",
    isLoggedIn,
    isAdminIn,
    upload.single("file"),
    adminController.productAdd                // POST /admin/productAdd
);

router.get(
    "/adminprofile", 
    isLoggedIn,
    adminController.findProductAll            // GET /admin/productList
);

router.get(
    "/adminProduct",
    isLoggedIn,
    isAdminIn,
    adminController.findProductList           // GET /admin/adminProduct
);

router.put(
    "/productEdit/:productId",
    isLoggedIn,
    isAdminIn,
    adminController.productEdit               // PUT /admin/productEdit/:productId
);

router.delete(
    "/productDelete/:productId",
    isLoggedIn,
    isAdminIn, 
    adminController.productDelete             // DELETE /admin/productDelete/:productId
);
// -----------------------------------------------------------------------------------------------

router.get(
    "/adminMemberList",                       // GET /admin/adminMemberList
    adminController.findMemberList
);

module.exports = router;