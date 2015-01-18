# Codecore Jukebox

You will build a Jukebox app using Javascript. I've provided `player.js` which defines the `playSong` function to play a song composed of an array of note objects. An example of calling `playSong`:

```javascript
var song = [{pitch: 'A', beats: 1}, {pitch: 'C#', beats: 2}, {pitch: 'D', beats: 4}];
// Play the song at 400 beats per minute.
playSong(song, 400);
```

If you want to know when the song is finished playing, you can pass an optional 3rd parameter to `playSong`, a function that will get called when the song is finished playing.

Our jukebox to repeatedly prompt users to enter a song, and play the song they enter. Since we'd like it to be easy for users to enter a song, they should be able to enter the following format:

```
A*1 C#*2 D*4
```

## Tasks

1. First we need to be able to parse individual notes. Write a function `parseNote` that takes a note string (e.g. "C#*2") and returns a note object (e.g. {pitch: "C#", beats: 2}). If the user doesn't provide a number of beats (e.g. "C#") then set beats to 1.

2. Now let's parse a whole song string. Write a function `parseSong` that takes a song string as above, and returns an array of note objects. You should use the `parseNote` function.

3. Finally, let's build our amazing Jukebox! Create an HTML page that, when loaded, prompts the user for a song string and plays the song. When the song if finished playing, prompt the user for another song, forever! To keep things clean, please use two script tags in your page. One to load the provided `player.js` file, and one to load your own `jukebox.js` file.