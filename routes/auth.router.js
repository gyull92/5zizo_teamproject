const express = require('express');
const router  = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('../middlewares/auth')
const AuthController = require('../src/controllers/auth.controller')
const authController = new AuthController();

router.post('/login',      isNotLoggedIn , authController.login)        // POST /auth/login
router.post('/signup',     isNotLoggedIn , authController.signUp)       // POST /auth/signup    
router.post('/withdrawal', isLoggedIn    , authController.withdrawal);  // POST /auth/withdrawal
router.get ('/logout',     isLoggedIn    , authController.logout)       // GET  /auth/logout 

module.exports = router;