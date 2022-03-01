const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const mongoURI = process.env.mongoURI;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('Connected to Mongo successfully');
    })
}

module.exports = connectToMongo;