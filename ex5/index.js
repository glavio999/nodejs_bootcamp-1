var fs = require('fs');
var utils = require('../modules/utils');
var args = process.argv;
var elements= null;
(args[2])? elements = args[2].split(','):elements=[];
fs.appendFile('list.txt', utils.createNiceListOfFiles(elements), function (err) {
  if (err) throw err;
  console.log('Great !');
});


// fs.stat('list.txt', function(err, stat) {
//   if (err == null) {
//     console.log('File exists');
//     updateFile();
//
//   } else if (err.code == 'ENOENT') {
//     console.log('File don\'t exists');
//     fs.writeFile('list.txt', '', function(err) {
//       if (err) throw err;
//       updateFile();
//     });
//
//   } else {
//     console.log('Some other error: ', err.code);
//   }
// });
//
// function updateFile() {
//   fs.readFile('list.txt', function(err, data) {
//     if (err) throw err;
//     var filedata = data.toString('utf8').split('\n');
//     var finalData = filedata.concat(elements);
//     console.log(finalData);
//     fs.writeFile('list.txt', utils.createNiceListOfFiles(finalData), function(err) {
//       console.log("great done");
//     });
//   });
// }
