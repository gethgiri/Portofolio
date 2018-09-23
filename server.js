require('babel-core/register')({
  "presets": ["es2015", "react", "stage-1"]
})

"use strict"
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var client = require('./client.js');
var Transmit = require('react-transmit');

 function handleRender(req, res) {
  console.log("fucntion called");
  Transmit.renderToString(client).then(({reactString, reactData}) => {
    console.log("reactString", reactString);
    fs.readFile('./public/index.html', 'utf8', function (err, data) {
      if (err) throw err;

const document = data.replace(/<div id="container"><\/div>/, `<div id="container"><section role="main" class="react-container"><div>${reactString}</div></section></div>`);
      const output = Transmit.injectIntoMarkup(document, reactData, ['/build/bundle.js']);
      res.send(output);
    });
  });
}


// Serve built files with static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// Serve requests with our handleRender function
app.get('*', handleRender);


app.listen(4004, function(){
  console.log('app is listening on port 4004');
})