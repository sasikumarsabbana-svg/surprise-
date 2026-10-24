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
  senderName: "Your very own surprise delivery boy 😂❤️", // Replace with your name or sweet nickname

  // -----------------------------------------------------------------
  // 2. SCENE 1: THE MYSTERIOUS INTRODUCTION 🚪
  // -----------------------------------------------------------------
  scene1: {
    headline: "Psst… Deepika, someone has a surprise for you ❤️",
    subtext: "Are you ready to see what is waiting behind this magical door?",
    knockButtonText: "Open Your Surprise ✨",
    hintText: "Click the door or button to open",
  },

  // -----------------------------------------------------------------
  // 3. SCENE 2: MY FUNNY ENTRANCE 😂
  // -----------------------------------------------------------------
  scene2: {
    dialogue: "Madam Deepika! Mee birthday surprise delivery boy vachesaadu! 😂🎁",
    subDialogue: "Delivery successful avvalante… first naa performance chudali! 😎",
    actionButtonText: "Continue 👉",
  },

  // -----------------------------------------------------------------
  // 4. SCENE 3: COMEDY DANCE SHOW 🕺
  // -----------------------------------------------------------------
  scene3: {
    // English dialogue
    englishDialogue: "I practiced this dance just for you… please rate my performance! 😂",
    // Telugu-English dialogue
    teluguDialogue: "Ee dance kosam chaala practice chesa… rating maatram honest ga ivvu! 😂",
    showTeluguDialogue: true,
    replayDanceButtonText: "Replay Dance 😂",
    continueButtonText: "Next Surprise ❤️",
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
    headline: "Happy Birthday, Deepika! 🎂❤️",
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
    
    // Heartfelt letter personalized for Deepika
    letterBody: [
      "Dear Deepika ❤️,",
      "",
      "Happy Birthday to the person who makes ordinary moments feel special.",
      "",
      "Today, I wanted to create something different for you—not just a birthday wish, but a little experience filled with laughter, surprises, and love.",
      "",
      "First, you had to tolerate my comedy 😂. Now, I want you to know that behind every silly moment is someone who genuinely wishes you happiness, peace, success, and beautiful memories.",
      "",
      "I hope this new year of your life brings you countless reasons to smile and dreams that slowly become reality.",
      "",
      "Thank you for being someone so special to me. I hope this little surprise makes your birthday a little more memorable.",
      "",
      "Happy Birthday, Deepika! ❤️🎂",
      "",
      "With lots of love,",
      "Your very own surprise delivery boy 😂❤️"
    ],
    
    closingQuote: "“Your smile is the best reward for this little surprise. ❤️”",
    replayButtonText: "Replay Our Story 🔄",
    skipTypewriterText: "Show Full Letter ⚡"
  },

  // -----------------------------------------------------------------
  // 8. CHARACTER ASSETS SETTINGS
  // -----------------------------------------------------------------
  // Using Sasi's custom caricature generated from his photo!
  character: {
    useCustomImages: true, // Enabled for Sasi's caricature
    caricatureImage: "assets/sasi-caricature.png",
    
    // COMEDY REAL PHOTO BOBBLEHEAD MODE:
    usePhotoBobblehead: false,
    myPhotoPath: "assets/sasi-raw.jpeg",

    customImages: {
      idle: "assets/sasi-caricature.png",
      peek: "assets/sasi-caricature.png",
      wave: "assets/sasi-caricature.png",
      dance: "assets/sasi-caricature.png",
      surprised: "assets/sasi-caricature.png",
      holdingGift: "assets/sasi-caricature.png",
      holdingLetter: "assets/sasi-caricature.png"
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
