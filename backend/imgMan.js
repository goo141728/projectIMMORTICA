const modules = require('node_modules')
const fs = require('fs');
const path = require('path');
const frontend = '$HOME/projectIMMORTICA'
const directoryPath = path.join(frontend, 'forum/imgs');
fs.readdir(directoryPath, function (err, files {
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  //listening
  files.forEach(function (file) {
    console.log(file);
  })
}))
