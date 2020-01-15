var express = require('express');
var router = express.Router();
var Reviews = require('../Schemas/ReviewSchema');
var mongoose = require('mongoose');
var Restaurant = require('../Schemas/RestaurantSchema');

router.post('/add', async(req, res) => {
    
    console.log(req.body);
    var data = new Reviews(req.body);
    data.save((err,doc)=>{
        res.status(200).send("Inserted successfully.");
    });
    console.log("Completed");
    console.log(req.body['rating'])

    let restaurantData;

    await Restaurant.find({
        reg_no: req.body['reg_no']
    }, (err, doc) => {

        if (doc.length) {
            console.log(doc);
            restaurantData =  doc
        } else {
            console.log('Cannot find the record');
            //res.status(500).send("Cannot find the record");
        }
    });

         restaurantData['rating'] = await req.body['rating'];

        const filter = await {reg_no:req.body['reg_no']};
        const update = restaurantData;
        
        mongoose.set('useFindAndModify', false);
        await Restaurant.countDocuments(filter); // 0

        let doc = await Restaurant.findOneAndUpdate(filter, update, {
            new: true,
            upsert: false // Make this update into an upsert
        });
        //res.status(201).send(doc)
});



router.get('/view', (req, res) => {
    Reviews.find((err, doc) => {
        res.send(doc)
    })
    
});




router.get('/viewbyid/:reg_no', (req, res) => {
    Reviews.find({ reg_no: req.params.reg_no }, (err, doc) => {

        if (doc.length) {
            res.send(doc);
            console.log(doc);
        }
        else {
            console.log('Cannot find the record');
            res.status(500).send("Cannot find the record");
        }
    });

});

module.exports = router;