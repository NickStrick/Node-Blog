module.exports = {
    Get,
    Post,
    Delete,
    Put,
}


//CRUD operations
const userDb = require('../data/helpers/userDb.js')

function Get(req, res) {
    const id = req.params.id;
    userDb.get(id)
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(err => {
        res.status(500).json({msg:"cant find users", err})
    })
}

function Post(req, res) {
    
    const postInfo = req.body;
    console.log('body:', postInfo);
    if((postInfo.name !== undefined)){
        if(postInfo.name.length < 128){
            userDb.insert(postInfo).then(result => {
                res.status(201).json(result);
            })
            .catch(err => res.status(500).json({msg: "the post failed", err}))
        }else{
            res.status(500).json({msg: "usernames must be less than 128 characters"})
        }
    }else{
        res.status(500).json({msg: "you must give a username"})
    }   
}

function Delete(req, res) {
    const {id} = req.params;
    userDb.remove(id)
    .then(count => {
        res.status(202).json(count);
    })
    .catch(err => res.status(500).json({msg: "the user could not be removed", err}))
}

function Put(req, res) {
    const {id} = req.params;
    const changes = req.body;
    if((changes.name !== undefined)){
        if(changes.name.length < 128){
            userDb.update(id, changes)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => res.status(500).json({msg: "could not update", err}))
        }else{
            res.status(500).json({msg: "usernames must be less than 128 characters"})
        }
    }else{
        res.status(500).json({msg: "you must give a username"})
    }
}

