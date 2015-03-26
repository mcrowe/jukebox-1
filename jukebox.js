// parseNote function takes a string that represents a 
// single note that returns an object

//string to an object
// C#*2 => { pitch: 'C#', beats: 2}
var parseNote = function(note) {
  var splitNoteArray = note.split('*');
  var objectNote = {};
    objectNote.pitch = splitNoteArray[0];
    if (splitNoteArray[1] != undefined) {
      objectNote.beats = parseInt(splitNoteArray[1]);
    } else {
      objectNote.beats = 1;
    }
  return objectNote;
};

// console.log(parseNote('C#*2'));

// parseSong("Ab B"); // => [{pitch: 'Ab', beats: 1}, {pitch: 'B', beats: 1}]
var parseSong = function(songString) {
  var splitSongArray = songString.split(' ');
  //splitSongArray => [parseNote1, parseNote2]
  var result = [];
  for (var i = 0; i < splitSongArray.length; i += 1) {
    //need to run the parseNote on each of the array
    // parseNote(splitSongArray[i]);
    result.push(parseNote(splitSongArray[i]));
  }
  // you want the return outside the for loop.
  return result;
};

var onComplete = function () {
  console.log('Song finished playing');
  var replay = prompt('Would you like to play again? y or n');
  if (replay == "y") {
    var userString = prompt('Give me a list of notes to play');
    var song = parseSong(userString);
    playSong(song, bpm, onComplete);
  } else {
    prompt('Thanks for playing!');
  }
};

// console.log(parseSong("Ab B"));

// prompt the user for a string and plays the song

var userString = prompt('Give me a list of notes to play');
var bpm = prompt('What is the BPM?');

var song = parseSong(userString);

playSong(song, bpm, onComplete);

// console.log(result);

