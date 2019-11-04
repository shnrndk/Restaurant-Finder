
const express = require('express');
const app = express();
const connection = require('./connection');
var router = express.Router();
const mongoose = require('mongoose');

const cors = require('cors');
app.use(cors());


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(require('./routes'));


app.listen(3000,function(){
    console.log("listen to port 3000");
});
app.get("/",function(req,res){
    res.send("hello bab"); 
});
