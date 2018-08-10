// REQUIRED NPM PACKAGES
// The path package is used to get the correct file path for the html
var path = require('path');


// REQUIRED ROUTING
module.exports = function(app){

	// HTML GET Requests
	//GETs the Survey page
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	//GETs the Friends API page
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));	
	});
	
}