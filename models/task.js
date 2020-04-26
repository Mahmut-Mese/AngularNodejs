const mongoose = require('mongoose');
var Task = mongoose.model('Task', {
    title: { type: String },
    isDone: { type: Boolean }
})
module.exports = { Task };