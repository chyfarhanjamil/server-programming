const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
	res.send('This is Login Page');
});

router.get('/register', (req, res) => {
	res.sendFile('register.html', {root:'./views/users'});
});

module.exports = router;