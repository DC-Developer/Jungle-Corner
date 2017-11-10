var express = require("express");
var router = express.Router();
var logger = require("morgan");
var mongoose = require("mongoose");

var Summoner = require("../models/Summoner.js");

router.get("/", function(req, res) {
  Summoner.find({}, function(err,data){
    if(err){
      console.log(err);
    }else{
      console.log("db working");
      console.log(data);
       hbsObject = {
        summoners: data
      }
      console.log("hbs: ",hbsObject);
      res.render("index", hbsObject);
    }
  })
  });
  router.post("/search/:name", function(req, res){
    //need to use an ajax call on the submit button and send the data to this route
    var newSummoner = req.params.name;
    console.log(newSummoner);
    
    var hbsObject = {};

    Summoner.find({name: newSummoner}, function(err,data){
      if(err){
        console.log(err);
      }else{
        console.log("You're working");
        console.log(data);
         hbsObject = {
          summoners: data
        }
        console.log("hbs: ",hbsObject);
        res.render("index", hbsObject);
      }
    })
  });
  // This will get all the summoners we saved in our db
  router.get("/summoners", function(req, res) {
   
    // TODO: Finish the route so it grabs all of the articles
    Summoner.find({}, function(err, data){
      if(err){
        console.log(err);
      }else{
        res.json(data);
      }
  
    })
  
  });
  
  // This will grab a summoner by its object id
  router.get("/summoners/:id", function(req, res) {
    Summoner.findOne({ _id: req.params.id })
    .then(function(Summoner) {
      res.json(Summoner);
    })
    .catch(function(err) {
      res.json(err);
    });
  
  });
  
  router.post("/api/summoners/delete/:id", function(req, res) {
    Article.remove({"_id":req.params.id}, function(err, deleted){
      if(err){
        throw err;
      }else{
        // console.log("deleted: ", deleted);
      }
    })
    res.redirect("/"); 
  });

  router.put("/api/summoners/save/:id", function(req, res) {
    Summoner.findOneAndUpdate({"_id":req.params.id},{$set: {"saved": true}}, function(err, data){
      if(err){
        console.log("you couldnt save");
        throw err;
      }else{
        console.log("found");
        var hbsObject={
          summoners: data
        }
        res.render("index", hbsObject);
  
      }
    //taking out the redirect here made the save button work!
    })
    
  });

  module.exports = router;