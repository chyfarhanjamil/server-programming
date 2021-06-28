const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.get('/login', (req, res) => {
	const { id, username } = req.query;
	// const id = req.query.id;
	// const username = req.query.username;

	res.send(`user with id - ${id} and Username - ${username} is requesting to login`);
});

router.get('/dashboard/:id/:username', (req, res) => {
	// const id = req.params.id;
	const { id, username } = req.params;
	res.send(`user with id - ${id} and Username - ${username} is requesting to login`);
});

router.get('/register', (req, res) => {
	res.sendFile('register.html', { root: './views/users' });
});

router.post('/register', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
	//res.sendFile('register.html', { root: './views/users' });
    res.send(`user with email - ${email} and Username - ${username} is requesting to login`)
});

module.exports = router;
