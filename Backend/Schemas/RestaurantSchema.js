const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Restaurant = new Schema({

    "reg_no": Number,
    "restaurant_name": String,
    "discription":String,
    "owner_name": String,
    "NIC": String,
    "streetAddress1":String,
    "streetAddress2":String,
    "city":String,
    //"district":String,
    "phone_no": String,
    "owner_pics":String,
    "food_types":[String],
    "customer_pics":String,
    "reviews":{
        "id":String,
        "review":String
    }
}, { collection: 'RestaurantDetails' });

var Restaurant = mongoose.model('Restaurant', Restaurant);

module.exports = Restaurant;