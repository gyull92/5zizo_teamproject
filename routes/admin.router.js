const express = require("express");
const router  = express.Router();
const { isLoggedIn } = require('../middlewares/auth')
const { isAdminIn }  = require('../middlewares/auth');
const { upload } = require("../multer");

const AdminProductController = require("../src/controllers/admin.product.controller");
const AdminMenbersController = require("../src/controllers/admin.product.controller");

const adminProductController = new AdminProductController();
const adminMenbersController = new AdminMenbersController();

// Admin's product Routes CRUD --------------------------------------------------------------- 
router.post(
    "/productAdd",
    isLoggedIn,
    isAdminIn,
    upload.single("file"),
    adminProductController.productAdd          // POST /admin/productAdd
);

router.get(
    "/adminprofile", 
    isLoggedIn,
    adminProductController.findProductAll      // GET /admin/productList
);

router.put(
    "/productEdit/:productId",
    isLoggedIn,
    isAdminIn,
    upload.single("file"),
    adminProductController.productEdit         // PUT /admin/productEdit/:productId
);

router.delete(
    "/productDelete/:productId",
    isLoggedIn,
    isAdminIn, 
    adminProductController.productDelete       // DELETE /admin/productDelete/:productId
);
// -----------------------------------------------------------------------------------------------

router.get(
    "/adminMemberList",                        // GET /admin/adminMemberList
    adminMenbersController.findMemberList
);

module.exports = router;