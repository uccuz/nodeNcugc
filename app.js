var express = require('express')
var app = express();

app.set('view engine', 'ejs'); 

app.get('/', function(req, res) {
    //res.send("Hello World!!");
    res.render('index');
});

app.listen(80, function () {
    console.log('listening on port 80!');
});