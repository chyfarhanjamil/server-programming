const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const isLoggedIn = require('./../middlewares/auth.middlewares');
const { getRegister, postRegister, getLogin, getdashboard } = require('./../controllers/userController.controllers');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/login', getLogin);

router.get('/dashboard', getdashboard);

// router.get('/register', getRegister);

// router.post('/register', isLoggedIn,postRegister);

router.route('/register').all(isLoggedIn).get(getRegister).post(postRegister);

module.exports = router;
