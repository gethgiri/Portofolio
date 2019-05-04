const express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var fm = require('front-matter');
var cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.options('*', cors()); 


app.use(function(req, res, next) {
	var allowedOrigins = ['http://127.0.0.1:8001', 'http://localhost:8001', 'http://127.0.0.1:3000', 'http://localhost:3000'];
	var origin = req.headers.origin;
	if(allowedOrigins.indexOf(origin) > -1){
	    res.setHeader('Access-Control-Allow-Origin', origin);
	}
	res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.header('Access-Control-Allow-Credentials', true);
	return next();
});

app.use(express.static('client/build'));

app.get('*',  (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('static/build'));
    const path = require('path');
    app.get('*',  (req, res) => {
        res.sendFile(path.resolve(__dirname, 'static', 'build', 'index.html'));
    })
}

var server = app.listen(process.env.PORT || 8001, function () {
 var port = server.address().port;
 console.log("Express is working on port's " + port);
});