/**
 * ===================================================================
 * PROJECT DEEPIKA — CONFIGURATION FILE
 * ===================================================================
 * Welcome! This file holds all the text, photos, and settings for Deepika's
 * interactive birthday surprise.
 * 
 * You DO NOT need to know complex coding to edit this file!
 * Simply change the text inside the quotation marks "..." or '...'.
 * 
 * Follow the comments below to customize your surprise!
 */

const BIRTHDAY_CONFIG = {
  // -----------------------------------------------------------------
  // 1. RECIPIENT & SENDER DETAILS
  // -----------------------------------------------------------------
  recipientName: "Deepika",
  birthdayDate: "27 November 2026", // Displayed on cake and memory banners
  senderName: "Your Delivery Boy ❤️", // Replace with your name or sweet nickname

  // -----------------------------------------------------------------
  // 2. SCENE 1: THE MYSTERIOUS DOOR 🚪
  // -----------------------------------------------------------------
  scene1: {
    headline: "Psst… Deepika, someone has a surprise for you.",
    subtext: "Are you ready to see what is waiting behind this magical door?",
    knockButtonText: "Knock Knock 🚪",
    hintText: "Click the door or button to knock",
  },

  // -----------------------------------------------------------------
  // 3. SCENE 2: THE BOYFRIEND HAS ARRIVED 😂
  // -----------------------------------------------------------------
  scene2: {
    dialogue: "Madam Deepika! Your birthday surprise delivery boy has arrived! 😂",
    subDialogue: "Special express delivery with 100% genuine drama, 200% love, and zero return policy!",
    actionButtonText: "Show Me What You Got! ✨",
  },

  // -----------------------------------------------------------------
  // 4. SCENE 3: THE UNEXPECTED COMEDY DANCE 🕺
  // -----------------------------------------------------------------
  scene3: {
    // English dialogue
    englishDialogue: "I practised this dance just for you… please rate my performance! 😂",
    // Optional Telugu-English dialogue (can be toggled or displayed together)
    teluguDialogue: "Ee dance kosam chaala practice chesa… rating maatram honest ga ivvu! 😂",
    showTeluguDialogue: true, // Set to false if you want English only
    replayDanceButtonText: "Replay Dance 🔁",
    continueButtonText: "Okay, You Earned a 10/10! Next Surprise 👉",
    ratings: [
      { stars: "⭐⭐⭐⭐⭐", label: "Oscar-level performance!" },
      { stars: "⭐⭐⭐⭐", label: "Better than Bollywood!" },
      { stars: "⭐⭐⭐⭐⭐", label: "Cutest delivery boy ever!" }
    ]
  },

  // -----------------------------------------------------------------
  // 5. SCENE 4: OUR LITTLE WORLD ❤️ (MEMORIES, NOTES, MYSTERY GIFT)
  // -----------------------------------------------------------------
  scene4: {
    title: "Our Little World ❤️",
    subtitle: "Three little boxes of happiness crafted just for you",
    
    // TAB A: OUR MEMORIES (Photo Gallery)
    // When you have real photos, drop them in 'assets/photos/' and update these filenames!
    memories: [
      {
        id: "mem1",
        title: "That Unforgettable Smile",
        date: "A Day to Remember",
        image: "assets/photos/deepika-01.svg", // Replace with "assets/photos/deepika-01.jpg"
        caption: "The first time you laughed at my silly joke. Your smile lights up every room it enters.",
        alt: "Deepika smiling brightly"
      },
      {
        id: "mem2",
        title: "Special Little Adventures",
        date: "Sweet Memories",
        image: "assets/photos/memory-01.svg", // Replace with "assets/photos/memory-01.jpg"
        caption: "No matter where we go or what we do, every simple moment turns into magic with you.",
        alt: "A sweet adventure together"
      },
      {
        id: "mem3",
        title: "Countless Laughs & Coffee",
        date: "Pure Happiness",
        image: "assets/photos/memory-02.svg", // Replace with "assets/photos/memory-02.jpg"
        caption: "Here is to endless conversations, silly arguments over food, and moments that make life beautiful.",
        alt: "Cherished moments"
      },
      {
        id: "mem4",
        title: "Here is to Your Future",
        date: "27 November",
        image: "assets/photos/memory-03.svg", // Replace with "assets/photos/memory-03.jpg"
        caption: "Cheering for all your big dreams, your achievements, and the amazing person you are becoming.",
        alt: "Celebrating Deepika"
      }
    ],

    // TAB B: LITTLE NOTES (Clickable sweet notes)
    littleNotes: [
      {
        id: "note1",
        icon: "✨",
        headline: "Note #1",
        message: "A little reminder that you deserve all the happiness in the entire universe today and every single day.",
        tag: "Daily Reminder"
      },
      {
        id: "note2",
        icon: "🌸",
        headline: "Note #2",
        message: "I hope today gives you a hundred reasons to smile, twenty reasons to laugh loudly, and zero stress!",
        tag: "Birthday Wish"
      },
      {
        id: "note3",
        icon: "💖",
        headline: "Note #3",
        message: "Here is one more little surprise just for you: You make my world a million times brighter just by being you.",
        tag: "From The Heart"
      },
      {
        id: "note4",
        icon: "👑",
        headline: "Note #4",
        message: "Rule for today: The Birthday Queen gets whatever she wishes for (as long as the delivery boy survives 😂).",
        tag: "Queen's Decree"
      }
    ],

    // TAB C: MYSTERY GIFT (Interactive opening box)
    mysteryGift: {
      boxLabel: "Tap to unwrap your mystery gift!",
      surpriseTitle: "Ta-da! 🎉 A Lifetime Coupon!",
      surpriseMessage: "This coupon entitles Deepika to unlimited hugs, unlimited patience during shopping, emergency ice cream deliveries, and 100% unconditional love whenever needed! Non-refundable and valid forever! ❤️",
      actionText: "Accept Gift & Eat Cake 🎂"
    }
  },

  // -----------------------------------------------------------------
  // 6. SCENE 5: THE BIRTHDAY CAKE 🎂
  // -----------------------------------------------------------------
  scene5: {
    headline: "Happy Birthday, Deepika! 🎂",
    subtext: "Make a wish in your heart before you blow out the candles!",
    blowButtonText: "Blow the Candles 🕯️",
    wishedHeadline: "✨ May All Your Wishes Come True! ✨",
    wishedSubtext: "Sending you endless love, good health, boundless joy, and success in everything you touch.",
    continueToLetterText: "Read My Birthday Letter 💌"
  },

  // -----------------------------------------------------------------
  // 7. SCENE 6: THE HEARTFELT LETTER 💌
  // -----------------------------------------------------------------
  scene6: {
    envelopePrompt: "A special letter sealed with love just for you.",
    openLetterButtonText: "Open My Letter 💌",
    letterTitle: "Happy Birthday, Deepika! ❤️",
    
    // The placeholder letter text — replace or expand this with your own heartfelt words!
    letterBody: [
      "Dear Deepika,",
      "",
      "Happy Birthday! ❤️",
      "",
      "I created this little surprise to make you smile, laugh, and feel extra special on your birthday.",
      "",
      "This little website has silly moments, unexpected surprises, and a lot of care hidden inside it. Every animation, every little note, and every line of code was crafted thinking about bringing a genuine smile to your face.",
      "",
      "I hope your day is filled with boundless happiness, heartwarming laughter, delicious food, and memories you will cherish for years.",
      "",
      "Thank you for being such an extraordinary, radiant, and wonderful presence in my life.",
      "",
      "Happy Birthday once again, my favourite person!",
      "",
      "With lots and lots of love,",
      "[YOUR NAME OR NICKNAME]"
    ],
    
    closingQuote: "Your smile is the best reward for this little surprise. ❤️",
    replayButtonText: "Replay Our Story 🔄",
    skipTypewriterText: "Show Full Letter ⚡"
  },

  // -----------------------------------------------------------------
  // 8. CHARACTER ASSETS SETTINGS
  // -----------------------------------------------------------------
  // By default, the website uses the built-in animated caricature illustrations.
  // When you have your own cutout photos or custom caricature images,
  // place them in 'assets/character/' and set 'useCustomImages: true'.
  character: {
    useCustomImages: false, // Set to true when you add full pose cutout PNGs
    
    // COMEDY REAL PHOTO BOBBLEHEAD MODE:
    // Drop your photo into 'assets/character/' as 'my-photo.jpg' or 'my-photo.png'
    // and set usePhotoBobblehead: true!
    // Your real face will be mounted on the funny dancing caricature body with cool shades!
    usePhotoBobblehead: false,
    myPhotoPath: "assets/character/my-photo.jpg",

    customImages: {
      idle: "assets/character/idle.png",
      peek: "assets/character/peek.png",
      wave: "assets/character/wave.png",
      dance: "assets/character/dance.png",
      surprised: "assets/character/surprised.png",
      holdingGift: "assets/character/holding-gift.png",
      holdingLetter: "assets/character/holding-letter.png"
    }
  },

  // -----------------------------------------------------------------
  // 9. AUDIO SETTINGS
  // -----------------------------------------------------------------
  audio: {
    // If you add a background song, place it in 'assets/audio/background.mp3'
    // and set bgmPath to "assets/audio/background.mp3"
    bgmPath: "assets/audio/background.mp3",
    hasCustomBgm: false, // Set to true when you add an mp3 file
    volume: 0.5, // 0.0 to 1.0
    // Built-in Web Audio synthesizer sounds (gentle chimes, knock, blow, fanfare)
    synthesizedSoundEnabled: true
  }
};

// Export to global scope for browser usage
if (typeof window !== "undefined") {
  window.BIRTHDAY_CONFIG = BIRTHDAY_CONFIG;
}
