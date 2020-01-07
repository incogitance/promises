/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  //read the file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      //console.error(err);
      callback(err);
    } else {
      // if no error set data to lines variable split by '\n'
      // return error message if no lines in file
      // return lines[0] to callback
      let lines = data.toString().split('\n');
      if (!lines.length) {
        //console.log('No lines in file');
        callback('No lines found in file', null);
      }
      callback(null, lines[0]);
    }
  });
  // TODO
};


// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // request (url, callback)
  request(url, (err, response, body) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response.statusCode);
    }
  });
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
