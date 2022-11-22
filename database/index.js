const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String, //just to keep track
  owner: {login: String}, //just to keep track of owner too, might not be needed
  url: String, //unique url
  forks_count: Number //compare # of forks to other repos
});
//Repo is our schema "name"
let Repo = mongoose.model('Repo', repoSchema);

let save = (repo, callback) => {
  /* TODO: Your code here
  This function should save a repo or repos to the MongoDB
  using insert
  Repo.insertMany(repo)
  */
}

//need some way to get data from database that is sorted in terms of forks_count

module.exports.save = save;