require('dotenv').config();
const fs = require("fs");

var axios = require('axios');

var Spotify = require("node-spotify-api");

var moment = require("moment");

var spotify = new Spotify({
    id : process.env.SPOTIFY_ID,
    secret : process.env.SPOTIFY_SECRET
});

const search = process.argv[2];
let song = process.argv.slice(3).join(" ");

if (search === "spotify-this-song") {
        if(!song) {
            song = "The Sign"
        }
    spotify.search({ type: 'track', query: song, limit: 1 }, function (err, data) {
        if(err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(`
        Artist: ${data.tracks.items[0].artists[0].name}
        Song name: ${data.tracks.items[0].name}
        Spotify song link: ${data.tracks.items[0].external_urls.spotify}
        Album song is from: ${data.tracks.items[0].album.name}
        `)
    })
};


if (search === "movie-this") {
    let movie = process.argv[3];
    if(!movie) {
        movie = "Mr.Nobody";
    } 

    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=" + process.env.OMDBAPI).then(
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
} 


else if (search === "concert-this") {
    const artistConcert = process.argv[3];

    axios.get("https://rest.bandsintown.com/artists/" + artistConcert + "/events?app_id=" + process.env.BANDS_IN_TOWN).then(
        function (responde) {
            for (var i = 0; i < 3; i++) {
                console.log(`
                Name of the Venue: ${responde.data[i].venue.name}
                Venue location: ${responde.data[i].venue.city}, ${responde.data[i].venue.region}, ${responde.data[i].venue.country}
                Date of the Event: ${moment(responde.data[i].datetime).format('MMMM Do YYYY, h:mm:ss a')}
                `) 

            }
        }
    )
}


else if (search === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if(error) {
            return console.log(error);
        }
        console.log(data);
    })
}