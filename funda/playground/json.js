const fs = require('fs');

var originalNote ={
title:'secret',
body:'this is my secret'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(note.title);
console.log(note.body);