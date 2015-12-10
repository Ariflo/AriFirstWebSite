// server.js
// load the things we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

// use res.render to load up an ejs view file
// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/index.ejs', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/index2.ejs', function(req, res) { 
    res.render('pages/index2');
});

app.listen(port);
console.log('8080 is the magic port');