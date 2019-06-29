# Liri-Bot
Homework 8

Liri bot is an app that takes input from the user and then searches the databases for either music bands, songs or movies. It's a smaller version of already established websites that can do all that is listed but with a smaller code. This only works in the terminal.

The folder is divided has two main javascript files. The key.js is used to grab the information from the package and send it to the main javascript liri.js. Liri.js reads the information and prints it out in the data base with some user input. The random.txt file is read for spotify should liri not find the song requested and defaults to "I want it that way". The API keys are placed in the env. 

Liri is broken up into 5 portions. A switch code allows you to type in the command in the terminal of what you want to search. myBand searches for band members and locations. GetSpotify searches for a song on the website with the information needed so as long as the API key is there. GetMovie searches for movies and prints out the information requested so as long as the API key is there. If it cannot find the movie, liri directs you to the movie Mr. Nobody instead. 

Instructions on how to use/install Liri-bot: 
I. Make sure visual studio code is downloaded onto your computer. 
II. Clone this repo (click the clone or download button and copy the link) 
III. Create javascripts for liri and key. Create the random text. 
IV. Install the package using the terminal. npm init creates package.JSON. npm install creates the locked package.JSON. 
V. Install the node modules. 
VI. Make sure you type npm dotenv for the program to be able to grab the require and run the code. 
VII. You should be able to node run liri when all the requirements are met. 


Technology used: 
Visual Studio Code:
--> Javascript 
--> Json
--> txt 
Spotify (to search for music)
omdbURL (to search for movies)
