const express = require('express');
const router = express.Router();
const {
    home,
    signup,
    login,
    dashboard,
    usersdashboard,
} = require("./controllers/UserController");


router.get('/', home);
router.get('/login',  login)
router.get('/signup', signup);
router.get('/register', login);
router.get('/dashboard', dashboard);
router.get('/users', usersdashboard);

module.exports = router;