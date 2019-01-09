const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const postDb = require('../data/helpers/postDb.js')
// const userDb = require('../data/helpers/userDb.js')
const usersFunctions = require('./users')
const postFunctions = require('./posts');

const server = express();

//custom middleware
function userToUpperCase(req, res, next) {
    let arr = req.body.name.split('');
    arr[0] = arr[0].toUpperCase();
    req.body.name = arr.join('');
    next();
}

//middleware
server.use(morgan('short'));
server.use(helmet());
server.use(express.json());
server.use(cors());

//routes
//users
server.get('/users', (req, res) => {
    usersFunctions.Get(req, res);
})
server.get('/users/:id', (req,res) => {
    usersFunctions.Get(req,res);
})
server.post('/users', userToUpperCase, (req, res) => {
    usersFunctions.Post(req, res)
});
server.delete('/users/:id', (req, res) =>{
    usersFunctions.Delete(req, res);
});
server.put('/users/:id', userToUpperCase, (req, res) => {
    usersFunctions.Put(req,res)
});

//posts
server.get('/posts', (req, res) =>{
    postFunctions.Get(req, res);
});

server.get('/posts/:id', (req, res) =>{
    postFunctions.Get(req,res);
})
server.post('/posts', (req, res) => {
    postFunctions.Post(req,res);
})
server.delete('/posts/:id', (req, res) => {
    postFunctions.Delete(req, res);
})

module.exports = server;