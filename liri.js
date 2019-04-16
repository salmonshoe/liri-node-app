require('dotenv').config();
const fs = require("fs");

var axios = require('axios');
// var keys = require('./keys');
// var spotify = new Spotify(keys.spotify);

//===== MAKE A CALL TO SEARCH FOR MOVIES
if (process.argv[2] === "movie-this") {
    const movie = process.argv[3];

    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            console.log(`
            Title of movie: ${response.data.Title}
            Year the movie came out: ${response.data.Year}
            IMDB Rating of the movie: ${response.data.imdbRating}
            Rotten Tomatoes Rating of the movie: ${response.data.Ratings[1].Value}
            Country where the movie was produced: ${response.data.Country}
            Language of the movie: ${response.data.Language}
            Plot of the movie: ${response.data.Plot}
            Actors in the movie: ${response.data.Actors}
        `);
        }
    );
} //Having trouble applying a result for undefined searches
// else if (process.argv[2] === "movie-this" && process.argv[3] === undefined){
//     console.log("Hmmm are you sure that is a movie? If you haven't watched 'Mr.Nobody,' then you should http://www.imdb.com/title/tt0485947/ It's on Netflix!");
// }

//===== MAKE A CALL TO SEARCH FOR CONCERTS
else if (process.argv[2] === "concert-this") {
    const artistConcert = process.argv[3];

    axios.get("https://rest.bandsintown.com/artists/" + artistConcert + "/events?app_id=codingbootcamp").then(
        function (responde) {
            for (var i = 0; i < 3; i++) {
                console.log(`
                Name of the Venue: ${responde.data[i].venue.name}
                Venue location: ${responde.data[i].venue.city}, ${responde.data[i].venue.region}, ${responde.data[i].venue.country}
                Date of the Event: ${responde.data[i].datetime}
                `) //Having trouble applying moment.js to the event details. Terminal states 'Reference Error: moment is not defined'

            }
        }
    )
}

//===== MAKE A DO-WHAT-IT-SAYS CALL
else if (process.argv[2] === "do-what-it-says") {
    //It will take the text inside of random.txt and then use it to call one of Liri's commands
    //It should run 'spotify-this-song' for "I Want it That Way"
    //Feel free to edit the text in random.txt to test out the feature for movie=this and concert-this
    fs.readFile("random.txt", "utf8", function(error, data) {
        if(error) {
            return console.log(error);
        }
        console.log(data);
    })
}

