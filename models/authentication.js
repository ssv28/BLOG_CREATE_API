const mongoose = require('mongoose');

const Schema = mongoose.Schema;   // Create a new schema

const authorDataSchema = new Schema({
    name: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
    }

})

const AUTHOR = mongoose.model('AUTHOR', authorDataSchema);     // Create a model from the schema
module.exports = AUTHOR