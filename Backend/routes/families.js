var express = require('express');
var router = express.Router();
var Restaurant = require('../Schemas/RestaurantSchema');
var mongoose = require('mongoose');

router.post('/add', (req, res) => {
    console.log(req.body);
    var data = new Restaurant(req.body);
    data.save((err,doc)=>{
        res.status(200).send("Inserted successfully.");
    });
    console.log("Completed");
});

//View all families in the area
router.get('/view', (req, res) => {
    Restaurant.find((err, doc) => {
        res.send(doc)
    })
    
});

router.put('/update', async (req, res) => {
    try {
        const filter = req.query;
        const update = req.body;
        
        mongoose.set('useFindAndModify', false);
        await Restaurant.countDocuments(filter); // 0

        let doc = await Restaurant.findOneAndUpdate(filter, update, {
            new: true,
            upsert: true // Make this update into an upsert
        });
        res.status(201).send(doc)
        //console.log(doc);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }

});

router.get('/viewbyid/:id', (req, res) => {
    Restaurant.find({ Identity_number: req.params.id }, (err, doc) => {

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