# Audio Directory

This folder holds background music or sound effects for the website.

## Adding Background Music:
1. Place your desired romantic, cheerful, or sweet background song file here.
2. Name it:
   `background.mp3`
3. Open `config.js` in the project root.
4. Set:
   ```javascript
   audio: {
     bgmPath: "assets/audio/background.mp3",
     hasCustomBgm: true,
     volume: 0.5,
     ...
   }
   ```
5. When the visitor clicks the Music button or begins the surprise, the background song can play gently!

*Note: The website features built-in Web Audio API synthesizers for knocking, birthday blow, and sparkle chimes, so the site works beautifully even without an external MP3 file!*
