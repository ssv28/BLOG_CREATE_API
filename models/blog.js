const mongoose = require('mongoose');

const Schema = mongoose.Schema;   // Create a new schema

const blogDataSchema = new Schema({
    url: {
        type: String,
        require: true,
        unique: true
    },

    title: {
        type: String,
        require: true,
        unique: true
    },

    description: {
        type: String,
        require: true,
    },

    published :{
        type: String,
        require: true,
    },

    updated :{
        type: String,
        require: true,
    },

    
    authId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'AUTHOR'
    }

})

const BLOG = mongoose.model('BLOG', blogDataSchema);     // Create a model from the schema
module.exports = BLOG