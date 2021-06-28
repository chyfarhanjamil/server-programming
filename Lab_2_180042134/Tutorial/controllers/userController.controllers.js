const getRegister = (req, res) => {
	res.sendFile('register.html', { root: './views/users' });
};
const postRegister = (req, res) => {
	// const username = req.body.username;
	// const email = req.body.email;
	// //res.sendFile('register.html', { root: './views/users' });
	// res.send(`user with email - ${email} and Username - ${username} is requesting to login`);
	res.redirect('/dashboard');
};
const getLogin = (req, res) => {
    const { id, username } = req.query;
	// const id = req.query.id;
	// const username = req.query.username;

	res.send(`user with id - ${id} and Username - ${username} is requesting to login`);
};
const getdashboard = (req, res) => {
    // const id = req.params.id;
	// const { id, username } = req.params;
	// res.send(`user with id - ${id} and Username - ${username} is requesting to login`);
	res.send(`User Dashboard`);
};

module.exports = {getRegister, postRegister, getLogin, getdashboard};