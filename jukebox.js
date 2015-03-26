// string = "C*3";

var parseNote = function (string) {
    noteBeat = string.split("*");
    if (noteBeat.length === 1) {
        note = {
            pitch: noteBeat[0],
            beats: 1
        };
        } else {
            note = {
                pitch: noteBeat[0],
                beats: parseInt(noteBeat[1])
            };
        }
    return note;
};

// parseNote(string);

var parseSong = function (string) {
    notesBeats = string.split(" ");
    notes = [];
    
    for (i = 0; i < notesBeats.length; i += 1) {
        parseNote(notesBeats[i]);
        notes.push(note);
    }
    return notes;
};

// parseSong("A*2 B C#*3 D");


var userSong = prompt("Enter your song in this format: 'A*2 B C#*3 D'");
var bpm = prompt("Enter BPM:");

var replay = function() {
    var userSong = prompt("Enter your song in this format: 'A*2 B C#*3 D'");
    var bpm = prompt("Enter BPM:");
    playSong(parseSong(userSong), bpm, replay);    
};

playSong(parseSong(userSong), bpm, replay);



