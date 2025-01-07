const authcontroller = require('../controller/auth-controller');
const express = require('express');
const router = express.Router();

router.post('/signup',authcontroller.createUser);
router.post('/login',authcontroller.login);

exports.router = router;