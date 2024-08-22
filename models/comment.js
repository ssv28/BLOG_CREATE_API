const mongoose = require('mongoose');

const Schema = mongoose.Schema; // Create a new schema

const commentDataSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BLOG',
        required: true,
    },

    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CATEGORY',
        required: true,
    },
    createdAt: {
        type : String
    },
    
    updatedAt: {
        type : String
    },
});

// Create a model from the schema
const COMMENT = mongoose.model('COMMENT', commentDataSchema);

module.exports = COMMENT;
