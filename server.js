var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./connection');
var path = require('path');
var routes = require('./routes');

var app = express();
app.use(bodyparser.urlencoded({limit: "50mb", extended: true,  parameterLimit:50000}));
app.use(bodyparser.json({limit: "50mb"}));
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
	next();
});

app.use(express.static(path.join(__dirname,'./www')));

app.get('/',function(req,res){
	res.send("API IS RUNNING");	
});

connection.init();
routes.configure(app);

var server = app.listen(8326,function(){
	console.log("Server Listening On Port:"+server.address().port);
});