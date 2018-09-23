"use strict"
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var client = require('./client.js');
var Transmit = require('react-transmit');



// Serve built files with static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// Serve requests with our handleRender function
app.get('*', handleRender);


app.listen(4004, function(){
  console.log('app is listening on port 4004');
})
