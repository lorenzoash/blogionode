const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
        content: {
            type: String,
            required: true
        }
    },{
        timestamps: true        
});

module.exports = commentSchema;

