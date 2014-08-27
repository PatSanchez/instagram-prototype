var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
var ig = require('instagram-node').instagram();


var port = 3000;

ig.use({ client_id: '972c813e4bf1439fb7057da8580a3604',
    client_secret: '7f22c3b1433a4763a77a995c2a61ade9' });


app.engine('handlebars', exphbs(
    {
        defaultLayout: 'main',
    }
));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render('index');

});

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});