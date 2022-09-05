/*const express=require("express");
const app=express();

app.get('/express/api/definition', (req, res) => {
    res.send('Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.')
  })

app.listen(4300,function(){
    console.log("App is Running");
})*/

var express = require('express');
var app = express();

// 
app.get('/simpleapp/api/v1/hello', function(req,res){
    res.send('Hello Client');
});


app.listen(3000, function(){
    console.log(' Simple App is running')
});
