var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var Summoner = require("./models/Summoner.js");


mongoose.Promise = Promise;

var app = express();

var MONGOLAB_URI = "mongodb://root:root@ds151955.mlab.com:51955/heroku_1lf908jc";

var PORT = process.env.PORT || 3000;


app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));

var router = require("./controller/routes.js");

app.use("/", router);
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

mongoose.connect(MONGOLAB_URI);
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// Listen on port 3000
app.listen(PORT, function() {
  console.log("App running on port " + PORT);
});
