var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var SummonerSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  rank: {
    type: String,
    required: false
  },
  wins: {
    type: Number,
    required: false
  },
  losses: {
    type: Number,
    required: false
  },
  wardSpot: {
    type: String,
    required: false
  },
  gankDeathsPerGame: {
    type: Number,
    required: false
  },
  winrateIfCamped: {
    type: Number,
    required: false
  },
  currentGameId: {
    type: Number,
    required: true
  }

  // saved: {type: Boolean, default: false},

  // note: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Note"
  // }
});


var Summoner = mongoose.model("Summoner", SummonerSchema);


module.exports = Summoner;
