// load the things we need
var mongoose = require('mongoose');

// define the schema for our Playlist model
var playlistSchema = mongoose.Schema({
    name: String,
    author_id: String,
    contributor_id: [String],
    tag: [String],
    musics: [String]
});

// create the model for playlist and expose it to our app
module.exports = mongoose.model('Playlist', playlistSchema);
