var express = require('express');
var path = require('path'); 
var fs = require('fs');
var sort = require ('./sortalgo.js')

var app = express();

// set a stativ path to serve css and js files
app.use('/static', express.static('public'));

// setup view engine
app.set('view engine', 'ejs');

//using the nested Array as global variable
//var temp = sort.studentsByAgeCohorts;
app.locals.students = sort.studentsByAgeCohorts;

// render index.ejs on localhost
app.get('/', function(req, res){
	res.render('index');
});

// defining port
app.listen(3000)
