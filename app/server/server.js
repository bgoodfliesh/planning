var express    = require('express');
var morgan     = require('morgan');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var path       = require('path');
var request    = require('request');
var twitter    = require('twitter')
var port       = process.env.PORT || 8080;
var app        = express();

app.use(express.static(__dirname + './../client')) 
app.use(morgan('dev'))
app.use(bodyParser.json());

var client = new twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

// client.get(path, params, callback);

app.get('/api', function(req, res){
  console.log('server got request');
  var url = 'https://api.twitter.com/1.1/trends/place.json?id=1'//TWITTER API QUERY STRING
  var data;

  
  client.get(/*REQUEST URL*/hi , function(error, tweets, response){
    if(error) throw error;
    data = response
    console.log(tweets);  // The favorites. 
    console.log(response);  // Raw response object. 
  });



    res.status(201)
    res.json(data)
    res.end()
})

var server = app.listen(port, function () {
  // var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening on port:'+ port);
});