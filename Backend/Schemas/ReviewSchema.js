const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Reviews = new Schema({

    "reg_no": {type:String,required:true},
    "name":{type:String,required:true},
    "review":{type:String,required:true},
    "rating":{type:Number,required:true},
    "pics":[String]
    
}, { collection: 'Reviews' });

var Reviews = mongoose.model('Reviews', Reviews);

module.exports = Reviews;