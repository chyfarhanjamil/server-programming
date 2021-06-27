const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('<h1>Home Page - Get</h1>');
});
app.post('/', (req, res) => {
	res.send('<h1>Home Page - post</h1>');
});
app.get('/about', (req, res) => {
	// res.cookie('username', 'tasnim');
	//res.clearCookie('username');
	//res.append('id', '180042134')
	res.send('<h1>Home Page</h1>');
});
app.get('/contact', (req, res) => {
	res.send('<h1>Contact Page</h1>');
});
app.use((req, res) => {
	res.status(404).send('<h1>Page does not exist</h1>');
});

module.exports = app;
