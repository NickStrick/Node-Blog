const express = require('express');

const configureMiddleware = require('./middleware/middleware.js');
const usersRouter = require('./users')
const postRouter = require('./posts');

const server = express();

configureMiddleware(server);
//routes
//users
server.use('/users', usersRouter);
//posts
server.use('/posts', postRouter);


module.exports = server;