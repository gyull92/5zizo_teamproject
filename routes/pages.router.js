const express = require('express');
const router  = express.Router();
const { isLoggedIn   , isNotLoggedIn } = require('../middlewares/auth');
const { isGeneralIn  , isAdminIn }     = require('../middlewares/auth');
const { renderMain   , renderLogin     , renderSignUp }         = require('../controllers/pages.controller');
const { renderProfile, renderWithdrawal, renderAdminInProfile } = require('../controllers/pages.controller');

// User's Data
router.use((req, res, next) => {
    console.log('req.user----------', req.user)   
    res.locals.user = req.user;
    next();
})

router.get('/', renderMain);                                                       // GET  /
router.get('/auth/login'     , isNotLoggedIn, renderLogin);                        // GET  /auth/login
router.get('/auth/signup'    , isNotLoggedIn, renderSignUp);                       // GET  /auth/signup
router.get('/auth/withdrawal', isLoggedIn   , renderWithdrawal);                   // GET  /withdrawal

// User's profile page Routes  -------------------------------------------------------------------------
router.get('/profile'        , isLoggedIn   , isGeneralIn , renderProfile);        // GET  /profile

// Admin's profile page Routes -------------------------------------------------------------------------
router.get('/adminprofile'   , isLoggedIn   , isAdminIn   , renderAdminInProfile); // GET  /adminprofile

module.exports = router;