var express = require('express');
var router = express.Router();
var Restaurant = require('../Schemas/RestaurantSchema');
var mongoose = require('mongoose');
const multer = require('multer');

router.post('/add', (req, res) => {
    console.log(req.body);
    var data = new Restaurant(req.body);
    data.save((err,doc)=>{
        res.status(200).send("Inserted successfully.");
    });
    console.log("Completed");
});

const storage = multer.diskStorage({
    destination:"./uploads/",
    filename:function(req,file,cb){
        cb(null,Date.now()+'.'+file.mimetype.split('/')[1])
    }
})

const upload = multer({storage:storage})
router.post('/addImage',upload.array('file'),(req,res)=>{
    
})


router.get('/view', (req, res) => {
    Restaurant.find((err, doc) => {
        res.send(doc)
    })
    
});


router.get('/search/:searchdata', (req, res) => {
searchdata = req.params.searchdata;
console.log(searchdata)
if(searchdata=='0'){
    Restaurant.find((err, doc) => {
        res.send(doc)
    })
}else{
Restaurant.find({ restaurant_name: new RegExp(searchdata,'i')}, (err, doc) => {
        if (doc.length) {
            res.send(doc);
            console.log(doc);
        }
        else {
            console.log('Cannot find the record');
            res.status(500).send("Cannot find the record");
        }
    });
}
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
    Restaurant.find({ reg_no: req.params.id }, (err, doc) => {

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