var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var SummonerSchema = new Schema({

  name: {
    type: String,
    required: true
  },

  // saved: {type: Boolean, default: false},

  // note: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Note"
  // }
});


var Summoner = mongoose.model("Summoner", SummonerSchema);


module.exports = Summoner;
