const mongoose = require('mongoose');

const Schema = mongoose.Schema; // Create a new schema

const likeDataSchema = new Schema({
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BLOG',
        required: true,
    },
    authId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AUTHOR',
        required: true,
    },
    count : {
        type : Number,
        required :true,
        default : 1,
        min : 1
    }
});

// Create a model from the schema
const LIKE = mongoose.model('LIKE', likeDataSchema);

module.exports = LIKE;
