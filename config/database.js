var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blogio-node')

const db = mongoose.connection;

db.once('open', function(){
    console.log(`Connected to MongoDB at ${db.host}: ${db.port}`)
});

db.on('error', function(err){
    console.error(`Database error:\n${err}`);
});
