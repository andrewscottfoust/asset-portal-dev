const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('./../config/config').get(process.env.NODE_ENV);
const SALT_I = 10;

const assetSchema = mongoose.Schema({
    filename:{
        type:String,
        require:true,
        unique:1,
        maxlength:100
    },
    name:{
        type:String,
        require:true,
        trim:true
    },
    description:{
        type:String,
        require:true,
        trim:true
    },
    type:{
        type:String,
        require:true,
        trim:true
    },
    user:{
        type:String,
        require:true,
        trim:true
    }
});


const Asset = mongoose.model('Asset',assetSchema);

module.exports = {Asset}