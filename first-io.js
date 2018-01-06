const fs = require('fs');

const pathOfFile = process.argv[2]

// const fileObject = fs.readFileSync(pathOfFile);

// const stringStuff = fileObject.toString();

// const newLineArray = stringStuff.split('\n');

// const newLine = newLineArray.length;

// console.log(newLine - 1);

// Shorter solution:
// const firstLine = fs.readFileSync(pathOfFile);
// const secondLine = firstLine.toString().split('\n').length;
// console.log('twoLineSolution: ' + (secondLine-1));

// One line solution:
const oneLine = fs.readFileSync(pathOfFile, 'utf8').split('\n').length -1;

console.log(oneLine);




