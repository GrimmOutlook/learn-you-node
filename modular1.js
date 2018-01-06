const fs = require('fs');
const path = require('path');

const folderPath = process.argv[2];
const fileExtension = process.argv[3];

const filteredList = fs.readdir(folderPath, (err, list) => {
  if (err) throw err;
  let finalArray = [];
  //In list of files, if an individual file's text after the . is equal to fileExtension, push the name of that file into an array.

  for(let i=0; i < list.length; i++){
    let listExtension = path.extname(list[i]).slice(1);

    if (listExtension === fileExtension) {
      console.log(list[i]);
      // finalArray.push(list[i]);
    }
  }
  // console.log(finalArray);
});


module.exports = filteredList;
