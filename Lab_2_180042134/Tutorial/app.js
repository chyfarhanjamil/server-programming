const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes.routes');
const {logger, printSomething} = require('./middlewares/app.middlewares');

//app.use([logger, printSomething]);
app.use(express.static('public'));
//app.use(logger); --To use middleware in all the routes without mentioning them explicitly
app.use(userRoutes);
app.get('/', (req, res) => {
	//res.send('<h1>Home Page - Get</h1>');
	res.sendFile('home.html', { root: './views' });
});
app.post('/', (req, res) => {
	res.send('<h1>Home Page - post</h1><a href="/register">Register</a>');
});
app.get('/about', (req, res) => {
	// res.cookie('username', 'tasnim');
	//res.clearCookie('username');
	//res.append('id', '180042134')
	res.send('<h1>Home Page</h1>');
});
app.get('/contact', (req, res) => {
	res.json({ userName: 'John Reese', profession: 'N/A' });
});
app.use((req, res) => {
	res.status(404).send('<h1>Page does not exist</h1>');
});

module.exports = app;
