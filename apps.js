<!-- Adding express.js to use express handlebars -->
var exphbs  = require('express-handlebars');
var express = require('express');
var giphy = require('giphy-api')();

var app = express();

//Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Gif Search listening on port localhost:3000!');
});


app.get('/', function (req, res) {
//Giphy query = the search term
    console.log(res);
    giphy.search(req.query.term, function (err, response) {
	if(response.data == undefined){
        	res.render('home', {gifs: response.data});
	}
    });
});

<!-- request a image from url hello-gif -->
app.get('/hello-gif', function (req, res) {
  var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
  res.render('hello-gif', {gifUrl: gifUrl})
});

app.get('/greetings/:name', function (req, res) {
  var name = req.params.name;
  res.render('greetings', {name: name});
});
