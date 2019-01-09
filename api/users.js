module.exports = {
    userGet,
    userPost,
    userDelete,
    userPut,
}


//CRUD operations
const userDb = require('../data/helpers/userDb.js')

function userGet(req, res) {
    const id = req.params.id;
    userDb.get(id)
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(err => {
        res.status(500).json({msg:"cant find users", error: err})
    })
}

function userPost(req, res) {
    const postInfo = req.body;
    console.log('body:', postInfo);
    if((postInfo.name !== undefined)){
        userDb.insert(postInfo).then(result => {
            res.status(201).json(result);
        })
        .catch(err => res.status(500).json({msg: "the post failed", error: err}))
    }
}

function userDelete(req, res) {
    const {id} = req.params;
    userDb.remove(id)
    .then(count => {
        res.status(202).json(count);
    })
    .catch(err => res.status(500).json({msg: "the post could not be removed", error: err}))
}

function userPut(req, res) {
    const {id} = req.params;
    const changes = req.body;

    userDb.update(id, changes)
    .then(result => {
        res.status(200).json(result);
    })
}

