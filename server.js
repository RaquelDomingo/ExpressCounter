var express = require("express");
var session = require('express-session');
var app = express();

app.use(express.static(__dirname + "/static"));
app.use(session({secret:"hello"}));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(request, response) {

	if(request.session.counter == undefined){
		request.session.counter = 0;
	}
	if(request.session.counter >= 0){
		request.session.counter += 1;
	}
    response.render('index', {session: request.session.counter})
});
app.listen(8000, function() {
 console.log("listening on port 8000");
})