//due to not getting an api key approved, this file will be used
//as our api and will be populated from the start of the server using 
//mongoose-seed-db npm package
module.exports = {
    model: 'Summoner',
    data: [
        { name: 'Galio',
          rank: 'Diamond 1',
          wins: 350,
          losses: 300,
          wardSpot: 'Top river bush',
          gankDeathsPerGame: 1,
          winrateIfCamped: 51.5,
          currentGameId: 1152,
          img: "https://raw.githubusercontent.com/DC-Developer/Jungle-Corner/master/public/assests/images/GalioSquare.png"
        },
        { name: 'Malphite',
          rank: 'Challenger',
          wins: 187,
          losses: 169,
          wardSpot: 'Red bush',
          gankDeathsPerGame: 0.5,
          winrateIfCamped: 54,
          currentGameId: 1152,
          img: "https://raw.githubusercontent.com/DC-Developer/Jungle-Corner/master/public/assests/images/MalphiteSquare.png"
        },
        { name: 'Yasuo',
          rank: 'Master',
          wins: 500,
          losses: 465,
          wardSpot: 'Mid-right river bush',
          gankDeathsPerGame: 2.3,
          winrateIfCamped: 47,
          currentGameId: 1152,
          img: "https://raw.githubusercontent.com/DC-Developer/Jungle-Corner/master/public/assests/images/YasuoSquare.png"
        
        },
        { name: 'Lulu',
          rank: 'Challenger',
          wins: 249,
          losses: 189,
          wardSpot: 'Bot tri-bush',
          gankDeathsPerGame: 2,
          winrateIfCamped: 51,
          currentGameId: 1152,
          img: "https://raw.githubusercontent.com/DC-Developer/Jungle-Corner/master/public/assests/images/LuluSquare.png"
        
        },
        { name: 'Draven',
          rank: 'Diamond 1',
          wins:  214,
          losses:  177,
          wardSpot: 'Bot lane-bush',
          gankDeathsPerGame: 4,
          winrateIfCamped: 50,
          currentGameId: 1152,
          img: "https://raw.githubusercontent.com/DC-Developer/Jungle-Corner/master/public/assests/images/DravenSquare.png"
        },

    ]
};