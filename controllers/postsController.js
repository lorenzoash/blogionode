// a controller is the glue between models and views

const Post = require('./../models/post.js')


module.exports = {
    index,
    newPost,
    create,
    show,
    upvote,
    downvote
}

function index(req,res) {
    Post.find({})
    .then(function(posts){
        res.render('posts/index', { posts: posts})
    })
    .catch(function(err){
        console.log(`Error in posts#index: ${err}`);
    })
}

function newPost(req, res) {

}

function create(req, res) {

}

function show(req, res) {

}

function upvote(req, res) {

}

function downvote(req, res) {

}