var express = require('express');
var router = express.Router();
var Reviews = require('../Schemas/ReviewSchema');
var mongoose = require('mongoose');

router.post('/add', async(req, res) => {
    
    console.log(req.body);
    var data = new Reviews(req.body);
    data.save((err,doc)=>{
        res.status(200).send("Inserted successfully.");
    });
    console.log("Completed");

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