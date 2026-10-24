# Personal Photos Directory

This folder holds the photos displayed in **Scene 4: Our Little World (Photo Gallery)**.

## How to add your real photos:
1. Choose your favourite photos of Deepika and your cherished memories together.
2. Save them into this folder (`assets/photos/`) as `.jpg` or `.png`.
   Recommended names:
   - `deepika-01.jpg` (A portrait or candid of Deepika smiling)
   - `memory-01.jpg` (A special adventure, date, or trip)
   - `memory-02.jpg` (A sweet coffee date, dinner, or funny moment)
   - `memory-03.jpg` (A celebration, milestone, or cute photo)
3. Open `config.js` in the project root.
4. Under `scene4.memories`, update the image filenames to match your files:
   ```javascript
   {
     id: "mem1",
     title: "That Unforgettable Smile",
     image: "assets/photos/deepika-01.jpg",
     caption: "Your personalized caption here...",
     ...
   }
   ```
5. You can also add more photo entries in `config.js` as many as you wish!

*Note: If an image file is not found, the website automatically falls back to an elegant illustrated card. Broken image icons will never be shown!*
