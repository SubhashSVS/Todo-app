const mongoose = require('mongoose');
const { boolean } = require('zod');

mongoose.connect(process.env.MONGO_URL);

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const Todo = mongoose.model('todos',todoSchema);

module.exports({ Todo }) 