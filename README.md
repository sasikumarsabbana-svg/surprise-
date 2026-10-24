# Project Deepika — A Little Comedy, A Lot of Love ❤️

A handcrafted, interactive birthday surprise website created for **Deepika** (Birthday: 27 November 2026).

This website combines a mysterious magical 3D door reveal, a funny animated delivery boy caricature, an unexpected comedy dance routine, an interactive memory gallery and love notes, an interactive candle-blowing birthday cake, and a heartfelt typewriter love letter.

---

## 🌟 Table of Contents
1. [Overview & Features](#overview--features)
2. [Folder Structure](#folder-structure)
3. [How to Run Locally (Beginner Friendly)](#how-to-run-locally-beginner-friendly)
4. [How to Customize Content](#how-to-customize-content)
   - [Editing Recipient, Date & Sender Name](#1-editing-recipient-date--sender-name)
   - [Replacing Caricature & Photo Assets](#2-replacing-caricature--character-poses)
   - [Adding Real Photos & Captions](#3-adding-deepikas-photos--captions)
   - [Customizing Dialogues & Comedy Dance](#4-customizing-dialogues--dance)
   - [Editing the Final Love Letter](#5-editing-the-final-love-letter)
   - [Adding Background Music](#6-adding-background-music)
5. [Free Public Deployment Guide (Netlify & Vercel)](#free-public-deployment-guide)
6. [Phone & Mobile Testing Checklist](#phone--mobile-testing-checklist)
7. [Privacy Notice for Public URLs](#privacy-notice-for-public-urls)

---

## Overview & Features

- **Scene 1: The Mysterious Introduction 🚪** — Elegant dark burgundy background with glowing stars, tiny hearts, and a 3D swinging door with a knocker ring. Displays *"Psst… Deepika, someone has a surprise for you ❤️"* and button *"Open Your Surprise ✨"*.
- **Scene 2: My Funny Entrance 😂** — Reveals Sasi's custom 2D caricature as the charming surprise delivery boy. Features a two-beat comedic entrance dialogue:
  1. *"Madam Deepika! Mee birthday surprise delivery boy vachesaadu! 😂🎁"*
  2. Short pause, followed by *"Delivery successful avvalante… first naa performance chudali! 😎"*
  3. Clearly visible *"Continue 👉"* button.
- **Scene 3: Comedy Dance Show 🕺** — Sasi's caricature performs on stage with disco beams and smooth, fluid CSS keyframe choreography. Includes interactive dance move buttons (*Bollywood Thumka*, *Moonwalk Slide*, *Funky Disco*, *Playful Comedy Groove*), rating stars, *"Replay Dance 😂"*, and *"Next Surprise ❤️"*.
- **Scene 4: Our Memories ❤️** — Three interactive cards:
  - **Our Memories 📸**: Responsive photo cards with lightbox zoom (`<dialog>`), captions, and dates.
  - **Little Notes 💌**: Sweet, heartfelt reminder notes for Deepika.
  - **Mystery Gift 🎁**: 3D animated wrapped gift box that unseals with confetti to reveal an unlimited lifetime birthday coupon.
- **Scene 5: Birthday Cake 🎂** — Multi-tiered pastel cake with flickering candles and warm lighting. Displays *"Happy Birthday, Deepika! 🎂❤️"*. Clicking *"Blow the Candles 🕯️"* extinguishes flames with gentle smoke drift, fanfare, confetti, and reveals *"Read My Birthday Letter 💌"*.
- **Scene 6: The Heartfelt Letter 💌** — Sasi's caricature presents a sealed letter. Clicking *"Open My Letter 💌"* unfurls an elegant parchment with gentle typewriter effect, instant skip button (*"Show Full Letter ⚡"*), and a *"Replay Our Story 🔄"* button that cleanly resets the entire journey.
- **Audio Synthesizer & Canvas Effects**:
  - Web Audio API synthesizer for realistic knocks, magical chimes, blowout puff, and fanfare (100% functional without external files!).
  - Canvas-based confetti explosion system and ambient floating stars and hearts.
  - Sasi's caricature located at `assets/sasi-caricature.png`.
  - Zero heavy external frameworks or dependencies — ultra-fast loading on all devices!

---

## Folder Structure

```text
deepika-birthday-surprise/
├── index.html            # Main semantic HTML structure & accessible modals
├── style.css             # Complete design system, 3D door, cake, animations
├── script.js             # State machine, audio synthesizer, confetti engine
├── config.js             # EASY CONFIGURATION: Edit all text, photos & letters here!
├── README.md             # This comprehensive guide
└── assets/
    ├── sasi-caricature.png # Sasi's 2D comedy caricature character
    ├── sasi-raw.jpeg       # Sasi's original photograph
    ├── character/          # Character poses and fallbacks
    ├── photos/             # Photo gallery pictures (Deepika & your memories)
    └── audio/              # Background music folder (optional)
```

---

## How to Run Locally (Beginner Friendly)

### Option 1: Direct Double Click (Fastest)
Simply double click `index.html` in your file explorer. It will immediately open in Google Chrome, Edge, Safari, or Firefox!

### Option 2: Using a Local Web Server (Recommended)
If you have Node.js installed, open your terminal in this folder and run:
```bash
npx serve .
```
or with Python:
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.

---

## How to Customize Content

All text, photos, and messages are organized inside **`config.js`**. You don't need to touch complex code! Open `config.js` in any text editor (VS Code, Notepad, etc.) to modify settings:

### 1. Editing Recipient, Date & Sender Name
```javascript
recipientName: "Deepika",
birthdayDate: "27 November 2026",
senderName: "Your Delivery Boy ❤️",
```

### 2. Replacing Caricature / Character Poses
By default, the website uses the built-in animated caricature vectors. When you have your cutout caricature photos:
1. Save your PNG images in `assets/character/` with transparent backgrounds:
   - `idle.png`
   - `peek.png`
   - `wave.png`
   - `dance.png`
   - `surprised.png`
   - `holding-gift.png`
   - `holding-letter.png`
2. In `config.js`, set:
   ```javascript
   character: {
     useCustomImages: true,
     ...
   }
   ```
*(Tip: If you only have one single cutout caricature photo, name it `idle.png` and point all poses to that single file! The website's CSS animations will still make it bounce and groove!)*

### 3. Adding Deepika's Photos & Captions
1. Place your photos in `assets/photos/` (e.g. `deepika-01.jpg`, `memory-01.jpg`, `memory-02.jpg`, `memory-03.jpg`).
2. In `config.js`, update the file paths and captions:
   ```javascript
   memories: [
     {
       id: "mem1",
       title: "That Unforgettable Smile",
       date: "A Day to Remember",
       image: "assets/photos/deepika-01.jpg",
       caption: "Your personalized caption here...",
       alt: "Deepika smiling brightly"
     },
     ...
   ]
   ```

### 4. Customizing Dialogues & Dance
Inside `config.js`:
- `scene2.dialogue`: Change the delivery boy speech.
- `scene3.englishDialogue`: Modify the dance line.
- `scene3.teluguDialogue`: Modify or toggle the Telugu-English comedy line:
  ```javascript
  teluguDialogue: "Ee dance kosam chaala practice chesa… rating maatram honest ga ivvu! 😂",
  showTeluguDialogue: true, // set to false for English only
  ```

### 5. Editing the Final Love Letter
In `config.js` under `scene6.letterBody`, edit the lines inside quotation marks to write your own heartfelt personal message!
```javascript
letterBody: [
  "Dear Deepika,",
  "",
  "Happy Birthday! ❤️",
  "",
  "Write your personal words here...",
  ...
]
```

### 6. Adding Background Music
1. Place your MP3 file into `assets/audio/` and name it `background.mp3`.
2. In `config.js`:
   ```javascript
   audio: {
     bgmPath: "assets/audio/background.mp3",
     hasCustomBgm: true,
     volume: 0.5,
     ...
   }
   ```

---

## Free Public Deployment Guide

You can deploy this static website for **100% free** using Netlify or Vercel so you can send Deepika a live link on WhatsApp or Instagram!

### Option A: 1-Click Drag & Drop via Netlify Drop (No GitHub Required!)
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Create a free account or log in.
3. Drag and drop the whole `deepika 27 folder` into the upload box on Netlify.
4. Netlify will generate a live URL (e.g. `https://magical-deepika-birthday.netlify.app`) in under 15 seconds!
5. In Site Settings > Domain Management, you can rename the site to something sweet like `deepika-birthday-surprise.netlify.app`.

### Option B: Deploying with GitHub & Vercel
1. Initialize a Git repository in this folder:
   ```bash
   git init
   git add .
   git commit -m "Happy Birthday Deepika Surprise Website"
   ```
2. Create a new repository on [GitHub](https://github.com) (set it to **Private** or **Public** according to your preference).
3. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/deepika-birthday-surprise.git
   git branch -M main
   git push -u origin main
   ```
4. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
5. Select your GitHub repository and click **Deploy**.
6. Vercel will give you a free, lightning-fast public URL with automatic SSL!

---

## Phone & Mobile Testing Checklist

Before sharing the final link with Deepika, open the website on your phone (Android / iPhone) and test:
- [ ] **Scene 1 (Door)**: Tap *"Knock Knock"* or the door — does the door swing open with a knock sound?
- [ ] **Scene 2 (Reveal)**: Does the caricature appear with the delivery boy dialogue?
- [ ] **Scene 3 (Dance)**: Does the dance animation play? Do the star ratings give funny responses?
- [ ] **Scene 4 (Our World)**:
  - Can you swipe or tap between Memories, Little Notes, and Mystery Gift?
  - Does tapping a photo open the full-screen view without distortion?
  - Does tapping the mystery gift box pop the lid and reveal the coupon?
- [ ] **Scene 5 (Cake)**: Tap *"Blow the Candles"* — do the flames blow out with smoke and confetti?
- [ ] **Scene 6 (Letter)**: Does the letter typewriter print smoothly? Does the *"Show Full Letter ⚡"* button work?
- [ ] **Replay Story**: Does the replay button smoothly return to the door with everything reset?
- [ ] **No horizontal scrolling**: The page should fit neatly inside mobile screens without horizontal jitter.

---

## Privacy Notice for Public URLs

> [!IMPORTANT]
> When you deploy a website to a public hosting platform (such as Vercel or Netlify), **anyone with the link can view the website**.
> - Do not post sensitive personal data (such as bank details, passwords, ID cards, or private home addresses).
> - While search engines generally do not index obscure random subdomains immediately, if absolute privacy is desired, you can use Netlify's password protection feature or share the link exclusively through private direct messaging.

---

Made with ❤️ and humor for Deepika's 27th Birthday Celebration!
