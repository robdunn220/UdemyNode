var fs = require('fs');

module.exports.addNote = function (noteToAdd) {
  console.log(noteToAdd);
  if (noteToAdd === undefined) {
    return 'You did not add a note.';
  }
  fs.appendFile('file1.txt', (noteToAdd + '\n'), function(err) {
    if (err) {
      console.log(err.message);
      return;
    }
  });
  return 'New note added';
};
