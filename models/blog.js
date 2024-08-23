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
        type: Date,
        default: Date.now
        
    },

    updated :{
        type: Date,
        default: Date.now,
    },

    
    authId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'AUTHOR'
    }

})

const BLOG = mongoose.model('BLOG', blogDataSchema);     // Create a model from the schema
module.exports = BLOG