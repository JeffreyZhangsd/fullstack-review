const express = require('express');
let app = express();
const getReposByUsername = require('../helpers/github.js');
const save = require('../database/index.js');
// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.

//express.static

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  /*
  set params of request
  here is where client posts username to our server
  we send a request to the github api
  we insert the response into our database
  and then eventually respond with some kind of 201
  */
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  /*
  here is where we send get request to our server
  server gets top 25 (or less) from data currently saved in server
  profit
  */
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
