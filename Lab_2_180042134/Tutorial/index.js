const express = require('express');
const app = express();
const PORT = 7777;

app.get('/', (req, res) => {
	res.send('<h1>Home Page</h1>');
});

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
