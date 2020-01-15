var express = require('express');
var router = express.Router();
var Restaurant = require('../Schemas/RestaurantSchema');
var mongoose = require('mongoose');
const multer = require('multer');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');
cloudinary.config({
    cloud_name: 'datla6jwf',
    api_key: '327471161541859',
    api_secret: 'eCIw1-mDssGxKfqqNXpy_qjYLqU'
});



router.post('/add', async (req, res) => {

    console.log(req.body);
    var data = new Restaurant(req.body);
    data.save((err, doc) => {
        doc => res.status(200).send("Inserted successfully.");
        err => res.status(401).send(err)
    });
    console.log("Completed");
});

const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.' + file.mimetype.split('/')[1])
    }
})

const upload = multer({
    storage: storage
})
router.post('/addImage', upload.single('file'), async (req, res) => {
    /*
    console.log(req.file['filename'])
    req.body['owner_pics']=req.file['filename']
    var data = new Restaurant(req.body);
    data.save((err,doc)=>{
        res.status(200).send("Inserted successfully.");
    });
    console.log("Completed");*/
    ;
    console.log(`./uploads/${req.file['filename']}`, );
    /*
    cloudinary.uploader.upload(this.fileurl,(err,result)=>{
        console.log("Error:",err)
        console.log("Result:",result)
    })*/
    await cloudinary.uploader.upload(`./uploads/${req.file['filename']}`, {
        "crop": "limit",
        "tags": "samples",
        "width": 3000,
        "height": 2000
    }, function (result) {
        console.log(result)
    });
})


router.get('/view', (req, res) => {
    Restaurant.find((err, doc) => {
        res.send(doc)
    })

});

router.get('/sort', (req, res) => {
    console.log("dfa")
    Restaurant.find().sort({"rating":-1}).exec(function(err, doc) { 
            res.send(doc)
        }
        
     );
});


router.get('/search/:searchdata', (req, res) => {
    searchdata = req.params.searchdata;
    console.log(searchdata)
    if (searchdata == '0') {
        Restaurant.find((err, doc) => {
            res.send(doc)
        })
    } else {
        Restaurant.find({
            restaurant_name: new RegExp(searchdata, 'i')
        }, (err, doc) => {
            if (doc.length) {
                res.send(doc);
                console.log(doc);
            } else {
                console.log('Cannot find the record');
                res.status(500).send("Cannot find the record");
            }
        });
    }
});


router.get('/searchandRequest/:searchdata', (req, res) => {
    searchdata = req.params.searchdata;
    console.log(searchdata)
        Restaurant.find({
            restaurant_name: new RegExp(searchdata, 'i')
        }, (err, doc) => {
            if (doc.length) {
                res.status(200).send(doc);
            } else {
                console.log('Cannot find the record');
                res.status(201).send(doc);
            }
        });
    
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
        subject: 'Request To Add new Restaurant',
        text: `${req.body['yourname']} has requested to Add this Restaurant
                        Restaurant Name: ${req.body['restaurant_name']}
                        Address : ${req.body['address']}
                        Email : ${req.body['email']}
                        Owner Name: ${req.body['owner_name']}
                        Request Customer Name: ${req.body['yourname']}
                        
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
router.get('/searchByCity/:searchdata', (req, res) => {
    searchdata = req.params.searchdata;
    console.log(searchdata)
    if (searchdata == '0') {
        Restaurant.find((err, doc) => {
            res.send(doc)
        })
    } else {
        Restaurant.find({
                
                        city: new RegExp(searchdata, 'i')
                    },
            (err, doc) => {
                if (doc.length) {
                    res.send(doc);
                    console.log(doc);
                } else {
                    console.log('Cannot find the record');
                    res.status(500).send("Cannot find the record");
                }
            });
    }

});

router.post('/searchByFilters', (req, res) => {
    searchdata = req.body;
    console.log(searchdata)
   
        
        Restaurant.find({
                $or:[{city: new RegExp(searchdata['searchdata'], 'i')},
                {
                    wifi: searchdata['wifi'],
                    parking: searchdata['parking'],
                    child_care: searchdata['child_care'],
                    liquor: searchdata['liquor'],
                    familyrestaurant: searchdata['familyrestaurant'],
                    beachfront: searchdata['beachfront'],
                    wheelchair: searchdata['wheelchair'],
                    delivery: searchdata['delivery'],
                    food_types:new RegExp(searchdata['food_types'], 'i')
                }]
            },
            (err, doc) => {
               res.send(doc)
            });
            
    

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
    Restaurant.find({
        reg_no: req.params.id
    }, (err, doc) => {

        if (doc.length) {
            res.send(doc);
            console.log(doc);
        } else {
            console.log('Cannot find the record');
            res.status(500).send("Cannot find the record");
        }
    });

});

module.exports = router;