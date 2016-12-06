/*jshint esversion:6 */

const notes = require('./notes.js');
const _ = require('lodash');

var res = notes.addNote(process.argv[2]);
console.log(res);
