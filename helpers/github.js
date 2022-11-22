const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (user, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  //use axios.get on url from options
  //store data in some way
  //acknowledge success in some way
  //catch errors
}

module.exports.getReposByUsername = getReposByUsername;