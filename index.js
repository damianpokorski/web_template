// Load modules
// Server capabilities
var express 		= 	require('express');
var app 		= 	express();
var http 		= 	require('http').Server(app);

/*
//	General requests
*/

// Define public folder for all common files (js,css etc.)
app.use(express.static('public'));

// Initialize
http.listen(3000, function(){
	console.log("Server running at localhost:3000");
});
