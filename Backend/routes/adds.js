var express = require('express');
var router = express.Router();
var Adds = require('../Schemas/AddsSchema');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
router.post('/add', async(req, res) => {
    
    console.log(req.body);
    var data = new Adds(req.body);
    data.save((err,doc)=>{
        res.status(200).send("Inserted successfully.");
    });
    console.log("Completed");

});

router.post('/sendEmail', async(req, res) => {
    
    console.log(req.body);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'restfind456@gmail.com',
          pass: 'restaurantadmin'
        }
      });
      
      var mailOptions = {
        from: 'restfind456@gmail.com',
        to: 'restfind321@gmail.com',
        subject: 'Request From The Customer',
        text: `${req.body['email']} has requested below information

                        ${req.body['description']}
                        
                `
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

});



router.get('/view', (req, res) => {
    Adds.find((err, doc) => {
        res.send(doc)
    })
    
});


module.exports = router;