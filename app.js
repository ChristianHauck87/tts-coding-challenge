var express = require('express');
var fs = require('fs');
var sort = require ('./sortalgo.js')

var app = express();

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
