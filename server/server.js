// TO DO: make this work.
// if yuo go to localhost:3000 the app
// there is expected crud to be working here
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'


//MIDDLEWARE:  Application-wide middleware
//1
//2
//3
//app.use is setting global middleware
app.use(express.static('client'));
//built in express.static
//app.use allows you to pass through a middleware function

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
//bodyParser is the one that handles JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var lions = [
{
name: "Chrisstine",
pride: "sdalnldknas",
age: "4",
gender: "female",
id: 1
}
];
var id = 1;

// TO DO: make the REST routes to perform CRUD on lions
app.get('/', function(req, res) {//4th middleware
  // send back a json response
  res.json(lions);
});

app.post('/lions', function(req, res) {
  var lion = req.body;
  lion.id = id;
  lions.push(lion);
  // res.send converts to json as well
  // but req.json will convert things like null and undefined to json too although its not valid
  ++id;
  console.log("LION", lion);
  res.send(lion);
});

app.get('/lions', function(req, res) {
  // send back a json response
  res.json(lions);
});

// get the parameters from the route
app.get('/lions/:id', function(req, res) {
  console.log("Params", req.params);
  var lion = _.find(lions, { id : parseInt(req.params.id)});
  console.log("THE LION", lion);
  res.json(lion || {});
});

app.put('/lions/:id', function(req, res){
  var update = req.body;
  if(update.id){
    delete update.id;
  }
  console.log("Params", req.params);
  var lion = _.find(lions, { id : parseInt(req.params.id)});
  if (![lions[lion]]) { //does this index of this lion exists?
      res.send();
  } else {
    var updatedLion = _.assign(lions[lion], update); //merging the object on the right to the object of the left and returns the object of left
    res.json(updatedLion);
  }
});

app.delete('/lions/:id', function(req, res) {
  var lion = _.find(lions, { id : parseInt(req.params.id)});
  if (![lions[lion]]) { //does this index of this lion exists?
      res.send();
  } else {
    var deletedLion = lions[lion];
    lions.splice(lion, 1);
    res.json(deletedLion);
    //You can only respond once, per request
  }
});
// GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
// req.query.order
// => "desc"

// req.query.shoe.color
// => "blue"

// req.query.shoe.type
// => "converse"

//5th on after the routing stack

app.listen(3000);
console.log('on port 3000');
