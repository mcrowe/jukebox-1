var enteredSong = prompt("please enter a song string");
playSong(parseSong(enteredSong), 200); 


function parseSong(unParsedSong) {
   var unParsedNotes = unParsedSong.split(" ");
   var song = [];
   for (var i=0; i < unParsedNotes.length; i++) {
       song.push(parseNote(unParsedNotes[i]));
   }
   return song;
}

function parseNote(unparsedNote) {
  var noteParts = unparsedNote.split("*");
  if (noteParts.length < 2){
      noteParts[1] = 1;
  }
  note = {
      pitch: noteParts[0],
      beats: noteParts[1]
  };
  return note;
}





