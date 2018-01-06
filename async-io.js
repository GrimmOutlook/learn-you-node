const fs = require('fs');

const pathOfFile = process.argv[2]

fs.readFile(pathOfFile, (err, data) => {
  if (err) throw err;

  const asyncNewLines = data.toString().split('\n').length - 1;
  console.log(asyncNewLines);
  // return asyncNewLines;

});

// console.log(fileObject);
