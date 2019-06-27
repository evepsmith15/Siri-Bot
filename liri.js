require("dotenv").config(); //require npm to keys

var keys = require("./keys.js"); //require to get key.js
var request = require("request");
var spotify = new Spotify(keys.spotify){
id: <29d98020a081474fa046ba5bb6c35689>,
secret: <8a5e36dc39af4b54a0af6c63f5d18fed> 
});

var omdbKey = keys.omdb.api_key;
var fs = require('fs'); //file system 
var userCommand = process.argv[2]; //user input
var parameterCommand = process.argv[3]; //input parameter

//function for concert
function myBand () {

}
//function for spotify 
var getSpotify = function (song) {

}

//function for ombd (requires spotify)
function GetMovie () {
    
}

//function for dothis 
function doThis(){
    fs.readFile('random.txt', "utf8", function(error, data){
      var text = data.split(',');
  
      spotifyThisSong(text[1]);
    });
  }