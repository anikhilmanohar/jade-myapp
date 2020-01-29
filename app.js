var express = require('express');
var app = express();
var routes = require('./routes/route');
app.set('view engine','jade');
app.get('/', routes.home);
app.get('/home', routes.home);
app.get('/:city', routes.city);
app.use(express.static(__dirname+'/public'));
var port = process.env.PORT||3141;

app.listen(port, function(req, res){
    console.log("server started on: http://localhost:"+port);
})
