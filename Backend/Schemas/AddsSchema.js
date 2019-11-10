const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Adds = new Schema({
    "addImage": {type:String,required:true},
    "description":{type:String,required:true},
    "email":{type:String,required:true}
}, { collection: 'Adds' });

var Adds = mongoose.model('Adds', Adds);

module.exports = Adds;