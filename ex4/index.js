var fs = require('fs');
var utils = require('../modules/utils');
fs.readdir('../', function(err, files) {
  if (err) throw err;
  fs.writeFile('result.txt', utils.createNiceListOfFiles(files), function(err, data) {
    if (err) throw err;
    console.log("great");
  });
});

// function createNiceListOfFiles(arrFiles){
//   return arrFiles.join('\n');
// }
//ES6
// "use strict";
// let fs = require('fs');
// fs.readdir('../', (err, files) => {
//   if (err) throw err;
//   fs.writeFile('result.txt', createNiceListOfFiles(files), (err, data) => {
//     if (err) throw err;
//     console.log("great");
//   });
// });
// function createNiceListOfFiles(arrFiles){
//   return arrFiles.join('\n');
// }
