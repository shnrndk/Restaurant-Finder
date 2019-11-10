const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Reviews = new Schema({

    "reg_no": Number,
    "email":String,
    "review":String,
    "pics":[String]
    
}, { collection: 'Reviews' });

var Reviews = mongoose.model('Reviews', Reviews);

module.exports = Reviews;