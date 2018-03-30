var fs = require('fs');
var path = require('path');

var express = require('express');
var app = express();

//--------------------------------------

//var JDPattern ='MVC/1/'
var JDPattern ='Lazy/'


var JSDrootFldr = path.join(__dirname+'/JS_designPatterns/');

var filePath = path.join(__dirname+'/JS_designPatterns/'+JDPattern);

app.use(express.static(JSDrootFldr));
app.use(express.static(filePath));



app.listen(1000,function(err){
	if(err) throw err
	console.log('Express is listening to 1000');
});

