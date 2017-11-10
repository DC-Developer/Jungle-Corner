var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var MongooseSeed = require('mongoose-seed-db')//seeds db with pre-set data

var Summoner = require("./models/Summoner.js");


mongoose.Promise = Promise;

var app = express();

var MONGOLAB_URI = "mongodb://root:root@ds255715.mlab.com:55715/heroku_sz5xw0qg";

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

//create db connection, then add code to seed database
// mongoose.connect(MONGOLAB_URI).then(() => {
//   MongooseSeed.loadModels(__dirname + '/models');
//   MongooseSeed.clearAll().then(() => {
//       MongooseSeed.populate(__dirname + '/data')
//   });
// });
"mongodb://localhost/Summoner"
if (process.env.MONGODB_URI){
  mongoose.connect(MONGODB_URI).then(() => {
    MongooseSeed.loadModels(__dirname + '/models');
    MongooseSeed.clearAll().then(() => {
        MongooseSeed.populate(__dirname + '/data')
    });
  });
}else{
  mongoose.connect("mongodb://localhost/Summoner").then(() => {
    MongooseSeed.loadModels(__dirname + '/models');
    MongooseSeed.clearAll().then(() => {
        MongooseSeed.populate(__dirname + '/data')
    });
  });
}

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
