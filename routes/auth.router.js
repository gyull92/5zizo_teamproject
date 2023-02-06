const express = require('express');
const router  = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('../middlewares/auth')
const { signUp, login, logout, withdrawal }     = require('../controllers/auth.controller')

router.post('/login',      isNotLoggedIn , login)        // POST /auth/login
router.post('/signup',     isNotLoggedIn , signUp)       // POST /auth/signup    
router.post('/withdrawal', isLoggedIn    , withdrawal);  // POST /auth/withdrawal
router.get ('/logout',     isLoggedIn    , logout)       // GET  /auth/logout 

module.exports = router;