const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Restaurant = new Schema({

    "reg_no": Number,
    "restaurant_name": String,
    "owner_name": String,
    "NIC_name": String,
    "address": String,
    "NIC_name": String,
    "phone_no": String,
    "owner_pics":String,
    "customer_pics":String,
    "reviews":{
        "id":String,
        "review":String
    }
}, { collection: 'RestaurantDetails' });

var Restaurant = mongoose.model('Restaurant', Restaurant);

module.exports = Restaurant;