const express = require('express');
const router  = express.Router();
const { upload } = require("../multer");
const { isLoggedIn   , isNotLoggedIn } = require('../middlewares/auth');
const { isGeneralIn  , isAdminIn }     = require('../middlewares/auth');
const { renderMain   , renderLogin , renderSignUp } = require('../src/controllers/pages.controller');
const { renderProfile, renderWithdrawal, renderAdminInProfile } = require('../src/controllers/pages.controller');
const { renderProductList, renderProductAdd, renderProductEdit , renderCart} = require('../src/controllers/pages.controller');

// User's Data
router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
})

// Use main page
router.get('/'               , renderMain);                                        // GET  /
router.get('/productList'    , renderProductList);                                 // GET  /renderProductList

// Use auth page
router.get('/auth/login'     , isNotLoggedIn, renderLogin);                        // GET  /auth/login
router.get('/auth/signup'    , isNotLoggedIn, renderSignUp);                       // GET  /auth/signup
router.get('/auth/withdrawal', isLoggedIn   , renderWithdrawal);                   // GET  /withdrawal

// Only general users can access -----------------------------------------------------------------------
router.get('/profile'        , isLoggedIn   , isGeneralIn , renderProfile);        // GET  /profile
router.get('/general/cart'   , isLoggedIn   , isGeneralIn , renderCart)            // GET  /general/cart

// Only admin can access -------------------------------------------------------------------------------
router.get('/adminprofile'   , isLoggedIn   , isAdminIn   , renderAdminInProfile); // GET  /adminprofile
router.get('/productAdd'     , isLoggedIn   , isAdminIn   , renderProductAdd);     // GET  /productAdd
router.get('/productEdit/:productId'        , isLoggedIn  , isAdminIn  , renderProductEdit);   // GET  /productEdit/:productId

module.exports = router;