var mongoose = require('mongoose');

//create a schema
var ZoneSchema = new mongoose.Schema({
    name: {type:String, default:''},
    zipCode: {type:Array, default:[]},
    timestamp: {type:Date, default:Date.now}
});

module.exports = mongoose.model('ZoneSchema', ZoneSchema);