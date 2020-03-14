
//require
var express = require('express')




// app
var app = express();
//port cong
var port = 3000;





//doen
app.listen(port, function (){
	console.log('Server listening on port' + port);
})