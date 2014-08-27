var express = require('express');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var app = express();
var ig = require('instagram-node').instagram();
app.hashtags = {};

var port = 3000;
var appBaseUrl = 'http://ss-ig-prototype.jit.su';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

ig.use({ client_id: '972c813e4bf1439fb7057da8580a3604',
    client_secret: '7f22c3b1433a4763a77a995c2a61ade9' });


app.engine('handlebars', exphbs(
    {
        defaultLayout: 'main'
    }
));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render('index');
});

app.get('/gallery/:tag', function(req, res){
    ig.tag_media_recent(req.params.tag, function(err, media, pagination, remaining, limit) {
        console.log(pagination);
        console.log(remaining);
        console.log(limit);
        res.render('gallery', {hashtag: req.params.tag, media: media});
    });
    
});

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});