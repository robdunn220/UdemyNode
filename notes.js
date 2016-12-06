var fs = require('fs');

module.exports.addNote = function (noteToAdd) {
  fs.appendFile('file1.txt', (noteToAdd + '\n'), function(err) {
    if (err) {
      console.log(err.message);
    }
  });
  return 'New note';
};
