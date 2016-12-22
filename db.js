var mongoose = require('mongoose');
var uristring = 'mongodb://heroku_6tl56f0w:lpp8c3pu0t9n60vjee7da52l8s@ds141108.mlab.com:41108/heroku_6tl56f0w';
mongoose.connect(uristring, function(err) {
	if(err) {
		console.log('Error: Connection Failed!');
	} else {
		console.log('Connection established');
	}
});