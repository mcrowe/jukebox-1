var userInput = "";

var promptUser = function() {

  userInput = prompt("Please enter a sequence of notes separated by one space. You can also specify the length of each note. Example) 'A B C#*3 D' ");
}

var parseNote = function(note) {

  // Capitalize the first character of the string
  note = note.split("");
  note[0] = note[0].toUpperCase();
  note = note.join("");

  // Initialize the object
  var noteObject = {}

  if ( note.indexOf("*") > 0 ) {
    // Divide the pair into a 2-item array
    var pair = note.split("*");  

    // Assign the property-value pair
    noteObject.pitch = pair[0];
    noteObject.beats = pair[1];

  // Otherwise, set to default beats: 1
  } else {
    noteObject.pitch = note;
    noteObject.beats = 1;
  }

  // Pass the object to parseSong function
  return noteObject;
}

var parseSong = function(userInput) {
  var noteObject = {};

  var songArray = []

  var song = userInput.split(" ");

  for (i = 0; i < song.length; i++) {
    songArray.push( parseNote( song[i] ) );
  }

  return songArray;
}

promptUser();
song = parseSong(userInput);
playSong( song,120 );