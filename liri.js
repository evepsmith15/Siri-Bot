var dotenv = require("dotenv").config(".env"); //require npm to keys

var keys = require("./keys.js"); //require to get key.js
var request = require("request");
var moment = require("moment"); //this is used forfinding band info only
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
//id: <29d98020a081474fa046ba5bb6c35689>,
//secret: <8a5e36dc39af4b54a0af6c63f5d18fed> 
var omdbKey = keys.omdb.api_key;
var fs = require('fs'); //file system 
var userCommand = process.argv[2]; //user input
var parameterCommand = process.argv[3]; //input parameter

//this commands allows you to pick the command you want
switch (userCommand) {
  case ('concert-this'):
    myBand();
    break;
  case ('spotify-this-song'):
    if (parameterCommand) {
      getSpotify(parameterCommand);
    } else {
      getSpotify("My Heart Will Go On");
    }
    break;
  case ('movie-this'):
    GetMovie();
    break;
  case ('do-what-it-says'):
    doThis();
    break;
  default:
    console.log("Try again please.");
}

//function for concert
function myBand() {
  var artist = process.argv[3];
  var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  request(URL, function (error, response, info) {
        if (!error && response.statusCode === 100) {
          var bandInfo = JSON.parse(info);
          for (var i = 0; i < bandInfo.tracks.items.length; i++) {
            console.log("Venue: " + bandInfo[i].venue.name);
            fs.appendFileSync("random.txt", "Venue: " + bandInfo[i].venue.name + "\n",
              function (error) {
                if (error) {
                  console.log(error);
                }
              })
            if (bandInfo[i].venue.region == "") {
              console.log("Location: " + bandInfo[i].venue.city + ", " + bandInfo[i].venue.country);
              fs.appendFileSync("random.txt", "Location: " + bandInfo[i].venue.city + ", " +
                bandInfo[i].venue.country + "\n",
                function (error) {
                  if (error) {
                    console.log(error);
                  }
                })

            } else {
              console.log("Location: " + bandInfo[i].venue.city + ", " + bandInfo[i].venue.region + ", " +
                bandInfo[i].venue.country);
              fs.appendFileSync("random.txt", "Location: " + bandInfo[i].venue.city + ", " +
                bandInfo[i].venue.region + ", " + bandInfo[i].venue.country + "\n",
                function (error) {
                  if (error) {
                    console.log(error);
                  }
                })
            }
          }
            var date = bandInfo[i].datetime;
            date = moment(date).format("MM/DD/YYYY");
            console.log("Date: " + date)
            fs.appendFileSync("random.txt", "Date: " + date + "\n----------------\n", 
            function (error) {
              if (error) {
                console.log(error);
              };
            });
          }
        }
  )}
            //function for spotify 
            var getSpotify = function (song) {
              spotify.search({
                type: 'track',
                query: song,
                limit: 1
              }, function (error, info) {
                if (!error) {
                  for (var i = 0; i < info.tracks.items.length; i++) {
                    var songInfo = info.tracks.items[i];
                    //artist
                    console.log("Artist: " + songInfo.artists[0].name);
                    //song name
                    console.log("Song: " + songInfo.name);
                    //spotify preview link
                    console.log("Preview: " + songInfo.preview_url);
                    //album name
                    console.log("Album: " + songInfo.album.name);
                  }
                } else {
                  console.log('Error!');
                }
              })
            }

            //function for ombd (requires spotify)
            function GetMovie(movie) {
              var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&apikey=745f708e' + omdbKey + '&plot=short&tomatoes=true';
              request(omdbURL, function (error, response, info) {

                if (!error && response.statusCode == 100) {
                  var info = JSON.parse(info);
                  console.log("Title: " + body.Title);
                  console.log("Year Released: " + info.Year);
                  console.log("IMdB Rating: " + info.imdbRating);
                  console.log("Country: " + info.Country);
                  console.log("Language: " + info.Language);
                  console.log("Plot: " + info.Plot);
                  console.log("Actors: " + info.Actors);
                  console.log("Rotten Tomatoes Rating: " + info.tomatoRating);
                  console.log("Rotten Tomatoes URL: " + info.tomatoURL);

                } else {
                  console.log('Error!')
                }
                if (movie === "Mr. Nobody") {
                  console.log("Watch Mr. Nobody here: http://www.imdb.com/title/tt0485947/");
                  console.log("You can also watch it on Netflix!");
                }
              });
            }
            //function for dothis 
            function doThis() {
              fs.readFile('random.txt', "utf8", function (error, data) {
                var text = data.split(',');
                spotifyThisSong(text[1]);
              })
            }