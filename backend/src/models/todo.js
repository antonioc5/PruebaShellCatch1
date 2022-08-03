const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    task: String,
    completed: {type:Boolean, default:false}
});

module.exports = mongoose.model('Todo', todoSchema);