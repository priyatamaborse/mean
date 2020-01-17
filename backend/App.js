var express = require('express');
var mongoose = require('mongoose');
var route = require('./routes/route.js')
var bodyparser = require('body-parser')
var app = express();


app.listen(3000);
app.use(bodyparser.json());
console.log("server started on port 3000");

mongoose.connect('mongodb://localhost:27017/expenselist',{useNewUrlParser:true ,useUnifiedTopology:true});
mongoose.connection.on('connected',()=>{
    console.log("mongoose connected on port 27017");
});

mongoose.connection.on('err',(error)=>{
    console.log(error);
});

app.use('/routes',route);