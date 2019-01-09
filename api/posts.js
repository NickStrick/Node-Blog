module.exports = {
    Get,
    Post,
    Delete,
    Put,
}

const postDb = require('../data/helpers/postDb.js');

function Get(req, res) {
    const id = req.params.id;
    postDb.get(id)
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(err => {
        res.status(500).json({msg:"cant find posts", err})
    })
}

function Post(req, res) {
    
    const postInfo = req.body;
    console.log('body:', postInfo);
    if((postInfo.userId !== undefined  && postInfo.text)){
        // if(userId){
            postDb.insert(postInfo).then(result => {
                res.status(201).json(result);
            })
            .catch(err => res.status(500).json({msg: "the post failed", err}))
        // }else{
        //     res.status(500).json({msg: "posts must have a vaid userID"})
        // }
    }else{
        res.status(500).json({msg: "you must give a userID and text"})
    }   
}

function Delete(req, res) {
    const {id} = req.params;
    postDb.remove(id)
    .then(count => {
        res.status(202).json(count);
    })
    .catch(err => res.status(500).json({msg: "the post could not be removed", err}))
}

function Put(req, res) {
    const {id} = req.params;
    const changes = req.body;
    if((changes.userId !== undefined  && postInfo.text)){
        postDb.update(id, changes)
        .then(result => {
            res.status(200).json(result);
        })
            .catch(err => res.status(500).json({msg: "could not update", err}))
    }else{
        res.status(500).json({msg: "you must give a userId and text"})
    }
}
