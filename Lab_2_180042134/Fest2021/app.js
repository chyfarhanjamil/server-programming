const express = require('express');
const app = express();

//Static Resources
app.use(express.static('public'));

//View Engine
app.set('view engine', 'ejs');

//Routes
const indexRoutes = require('./routes/index.routes');
const userRoutes = require('./routes/users.routes');
app.use(indexRoutes);
app.use('/users', userRoutes);

module.exports = app;
