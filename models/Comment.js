var mongoose = require('mongoose');

//create a schema
var CommentSchema = new mongoose.Schema({
    username: {type:String, default:''},
    body: {type:String, default:''},
    timestamp: {type:Date, default:Date.now}
});

module.exports = mongoose.model('CommentSchema', CommentSchema);