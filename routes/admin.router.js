const express = require("express");
const router  = express.Router();
const { isLoggedIn } = require('../middlewares/auth')
const { isAdminIn }  = require('../middlewares/auth');

const AdminController = require("../controllers/admin.controller");
const adminController = new AdminController();

// Admin's product Routes CRUD --------------------------------------------------------------- 
router.post(
    "/adminprofile/productAdd",
    isLoggedIn,
    isAdminIn,
    adminController.productAdd                // POST /admin/adminprofile/productAdd
);

// router.get(
//     "/adminprofile/productList", 
//     isLoggedIn,
//     adminController.findProductAll            // GET /admin/adminprofile/productList
// );

router.get(
    "/adminprofile/adminProduct",
    isLoggedIn,
    isAdminIn,
    adminController.findProductList           // GET /admin/adminprofile/adminProduct
);

router.put(
    "/adminprofile/productEdit/:productId",
    isLoggedIn,
    isAdminIn,
    adminController.productEdit               // PUT /admin/adminprofile/productEdit/:productId
);

router.delete(
    "/adminprofile/productDelete/:productId",
    isLoggedIn,
    isAdminIn, 
    adminController.productDelete             // DELETE /admin/adminprofile/productDelete/:productId
);
// -----------------------------------------------------------------------------------------------

router.get(
    "/adminMemberList",                       // GET /admin/adminprofile/adminMemberList
    adminController.findMemberList
);

module.exports = router;