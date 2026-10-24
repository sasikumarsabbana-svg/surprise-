# Character Caricature Assets Directory

This folder holds the character caricature poses used throughout the website!

## Included Default Vectors (.svg):
- `idle.svg`: Friendly standing pose with warm smile.
- `peek.svg`: Playfully peeking behind the magical door.
- `wave.svg`: Cheerful energetic wave with delivery boy cap.
- `dance.svg`: Hilarious comedy dance disco pose.
- `surprised.svg`: Shocked, jaw-dropped comedy expression.
- `holding-gift.svg`: Presenting a wrapped birthday gift.
- `holding-letter.svg`: Presenting a romantic sealed letter.

## How to use your OWN custom photos or caricature drawings:
1. Export your cutout caricature images (with transparent backgrounds) as PNG files.
2. Name them as follows:
   - `idle.png`
   - `peek.png`
   - `wave.png`
   - `dance.png`
   - `surprised.png`
   - `holding-gift.png`
   - `holding-letter.png`
3. Save them directly inside this folder (`assets/character/`).
4. In `config.js`, change:
   ```javascript
   character: {
     useCustomImages: true,
     ...
   }
   ```
5. If you only have **one** caricature photo, you can name it `idle.png` and point all pose paths in `config.js` to that single image. The website's CSS animations will still bring it to life!
