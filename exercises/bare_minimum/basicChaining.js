/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var homerSimpson = require('./promisification.js');
var krustyKlown = require('./promiseConstructor.js');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return krustyKlown.pluckFirstLineFromFileAsync(readFilePath)
  // .then((user) => {
  //   if (!user) {
  //     throw new Error('User does not exist');
  //   } else {
  //     return user;
  //   }
  // })
    .then((user) => {
      return homerSimpson.getGitHubProfileAsync(user);
    })
    .then((body) => {
      console.log('body', body);
      let data = JSON.stringify(body);
      fs.writeFile(writeFilePath, data, (err) => {
        if (err) {
          throw err;
        } else {
          console.log('Success writing profile body to ', writeFilePath);
        }
      });
    })
    .catch((err) => {
      console.log('Error with fetchProfileAndWriteToFile ', err);
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
