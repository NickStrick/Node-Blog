const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const postDb = require('../data/helpers/postDb.js')
// const userDb = require('../data/helpers/userDb.js')
const usersFunctions = require('./users')

const server = express();

//functions


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
server.post('/users', (req, res) => {
    usersFunctions.userPost(req, res)
});
server.delete('/users/:id', (req, res) =>{
    usersFunctions.userDelete(req, res);
})


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