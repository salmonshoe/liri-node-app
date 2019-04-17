# liri-node-app
    LIRI stands for Language Interpretation and Recognition Interface. My role is to use the Command Line through NodeJS to take in music and movie parameters from the user, then spit back data the user requests.

**Project Challenges**
    Using the Spotify API was a challenge as reference errors were persistant and the use of objects had to be accurate enough to display correctly.

**My Solution**
    I read through the spotify npm to understand how to use the documentation and ensure my process was following the directions given. It eased this assignment much more!

## Using Liri
There are four commands you can use to interact with Liri. Make sure to type these commands after typing "node liri.js"

1. spotify-this-song
  - With this command, users are able to search for any song that they please. It will return the artist, song name, a spotify link and the album where the song is from.
  - Behind the scenes, users are sending requests via the Spotify npm.
  - Be aware that song searches are only limited by one song. If you don't search anything, Node will default to the song *"The Sign."*

2. movie-this
  - With this command, users are able to search for any film that they please. It will return the movie title, year it came out, IMDB rating, Rotten Tomatoes rating, country of origin, language the movie was filmed in, a brief movie plot and the actors involved.
  - Behind the scenes, users are making a call request to the OMDB API via the axios npm.
  - Be aware that if you don't search for any movie, Node will default with a recommendation for *Mr.Nobody.*

3. concert-this
  - With this command, users are able to search for any artist that is on tour. It will return the artist's next three events! Informing users on the name of the concert, venue location, and the date of the event.
  - Behind the scenes, users are making a call request to the Bands in Town API via the axios npm. There is also interactivity with Moment.js to properly display the dates and times of concerts populated by NodeJS.

4. do-what-it-says
  - With this command, liri is able to read from the random.txt file

**Screen Recording UI Link: https://drive.google.com/file/d/1UaC9sAGDD_OXXHnanDL0MpaYCEH_8Bfl/view**