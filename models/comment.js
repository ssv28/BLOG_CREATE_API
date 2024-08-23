const mongoose = require('mongoose');

const Schema = mongoose.Schema; // Create a new schema

const commentDataSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },

    comment: {
        type: String,
        required: true,
    }
   
});

// Create a model from the schema
const COMMENT = mongoose.model('COMMENT', commentDataSchema);

module.exports = COMMENT;
