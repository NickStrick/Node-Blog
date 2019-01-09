const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const postDb = require('../data/helpers/postDb.js')
// const userDb = require('../data/helpers/userDb.js')
const usersFunctions = require('./users')

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
    usersFunctions.userGet(req, res);
})
server.get('/users/:id', (req,res) => {
    usersFunctions.userGet(req,res);
})
server.post('/users', userToUpperCase, (req, res) => {
    usersFunctions.userPost(req, res)
});
server.delete('/users/:id', (req, res) =>{
    usersFunctions.userDelete(req, res);
});
server.put('/users/:id', userToUpperCase, (req, res) => {
    usersFunctions.userPut(req,res)
});

//posts
server.get('/posts', (req, res) =>{
    postDb.get()
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(err => {
        res.status(500).json({msg:"cant find posts", error: err})
    })
});

module.exports = server;