/*
    hello-server.js

    The most basic web server you can write using Node.js
*/

'use strict';

// var http require('http');

// var server = http.createServer(function(req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.end('Hello World from Andy!\n');
// });

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hell Word from Dave!');
});

app.get('/foo', function(req, res) 
	res.send('You requested /foo!');
});

app.listen(8080, function() {
	console.log('server listening on http://localhost:8080');
});