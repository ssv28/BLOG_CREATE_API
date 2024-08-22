const mongoose = require('mongoose');

const Schema = mongoose.Schema;   // Create a new schema

const categoryDataSchema = new Schema({
    categoryName: {
        type: String,
        require: true,
    },

    authId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'BLOG'
    }

})

const CATEGORY = mongoose.model('CATEGORY', categoryDataSchema);     // Create a model from the schema
module.exports = CATEGORY