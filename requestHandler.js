"use strict"
import axios from 'axios';
var express = require('express');
var app = express();

function handleRender(req, res){
	app.get('/', function(response) {
		console.log("response", response);
		var htmlRender = JSON.stringify(response.data);
		res.render('./index', {htmlRender});	
	});
	// .then(function(response){
	// 	console.log("response", response);
	// 	var htmlRender = JSON.stringify(response.data);
	// 	res.render('./index', {htmlRender});
	// })
	// .catch(function(err){
	// 	console.log('server side rendering........', err);
	// })
}

module.exports = handleRender;