var express = require("express");
var router = express.Router();
var logger = require("morgan");
var mongoose = require("mongoose");

var Article = require("../models/Summoner.js");

var request = require("request");
var cheerio = require("cheerio");

router.get("/", function(req, res) {
    // Article.find({}, function(req, data){
    //   var hbsObject = {
    //           articles: data
    //   }
    //   console.log("I am working");
    //   res.render("index", hbsObject);
    // })
  });
  // This will get all the summoners we saved in our db
  router.get("/articles", function(req, res) {
   
    // TODO: Finish the route so it grabs all of the articles
    Summoner.find({}, function(err, data){
      
  
    })
  
  });
  
  // This will grab an article by it's ObjectId
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