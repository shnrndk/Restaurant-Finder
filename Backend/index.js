
const express = require('express');
const app = express();

const connection = require('./connection');
var router = express.Router();
const mongoose = require('mongoose');
var fileupload = require('express-fileupload');
app.use(fileupload({
  useTempFiles: true
}));
const cors = require('cors');
app.use(cors());

var cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name:'datla6jwf',
    api_key:'327471161541859',
    api_secret:'eCIw1-mDssGxKfqqNXpy_qjYLqU'
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(require('./routes'));


server = app.listen(3000,function(){
    console.log("listen to port 3000");
});
app.get("/",function(req,res){
    res.send("hello bab"); 
});

app.post("/upload",(req,res,next)=>{
  /*
  console.log(req.files);
  res.send({
    success:true,
    message:"File uploaded!"
  })
  /*
  const file = req.files.photo;
  this.file.mv("/uploads/"+file.name,(err,result)=>{
    if(err)
      throw err;
    res.send({
      success:true,
      message:"File Uploaded!"
    })
  })*/
  const file = req.files.file;
  console.log(file)
  
  cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
    console.log("Error: ",err);
    console.log("Result:", result);
    res.status(200).send(result);
  })
})

var io = require('socket.io')(server);

io.on('connection',(socket)=>{

    console.log('new connection made.');


    socket.on('join', function(data){
      //joining
      socket.join(data.room);

      console.log(data.user + 'joined the room : ' + data.room);

      socket.broadcast.to(data.room).emit('new user joined', {user:data.user, message:'has joined this room.'});
    });


    socket.on('leave', function(data){
    
      console.log(data.user + 'left the room : ' + data.room);

      socket.broadcast.to(data.room).emit('left room', {user:data.user, message:'has left this room.'});

      socket.leave(data.room);
    });

    socket.on('message',function(data){

      io.in(data.room).emit('new message', {user:data.user, message:data.message});
    })
});
