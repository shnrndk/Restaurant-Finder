const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Restaurant = new Schema({

    "reg_no": String,
    "restaurant_name": {type:String,required:true},
    "discription":{type:String,required:true},
    "owner_name": {type:String,required:true},
    "NIC": {type:String,required:true},
    "streetAddress1":{type:String,required:true},
    "streetAddress2":{type:String},
    "city":{type:String,required:true},
    //"district":String,
    "phone_no": {type:String,required:true},
    "owner_pics":{type:String,required:true},
    "email":{type:String,required:true},
    "food_types":[String],
    "longitude":String,
    "latitude":String
    
}, { collection: 'RestaurantDetails' });

var Restaurant = mongoose.model('Restaurant', Restaurant);

module.exports = Restaurant;