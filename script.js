/**
 * ===================================================================
 * PROJECT DEEPIKA — JAVASCRIPT ENGINE
 * A Little Comedy, A Lot of Love ❤️
 * ===================================================================
 */

(function () {
  "use strict";

  // Use configuration from config.js or fallback defaults
  const config = window.BIRTHDAY_CONFIG || {
    recipientName: "Deepika",
    birthdayDate: "27 November 2026",
    senderName: "Your Delivery Boy ❤️"
  };

  // State Management
  let currentScene = 1;
  let isDoorOpen = false;
  let isCandleBlown = false;
  let isGiftOpened = false;
  let typewriterInterval = null;
  let isAudioPlaying = false;
  let isAudioMuted = false;

  // DOM Elements
  const ambientCanvas = document.getElementById("ambient-canvas");
  const confettiCanvas = document.getElementById("confetti-canvas");
  const audioToggleBtn = document.getElementById("audio-toggle-btn");
  const audioIcon = document.getElementById("audio-icon");
  const audioLabel = document.getElementById("audio-label");
  const bgmAudio = document.getElementById("bgm-audio");
  const progressDots = document.querySelectorAll(".progress-dot");

  // ===================================================================
  // 1. WEB AUDIO API SYNTHESIZER (Works without external files!)
  // ===================================================================
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Play realistic wooden knock sound
  function playKnockSound() {
    if (isAudioMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    [0, 0.16].forEach((delay) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(140, now + delay);
      osc.frequency.exponentialRampToValueAtTime(45, now + delay + 0.08);

      gain.gain.setValueAtTime(0.8, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.09);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + delay);
      osc.stop(now + delay + 0.1);
    });
  }

  // Play magical sparkle chime
  function playChimeSound() {
    if (isAudioMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const freqs = [523.25, 659.25, 783.99, 1046.5, 1318.51]; // C5, E5, G5, C6, E6
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + idx * 0.07);

      gain.gain.setValueAtTime(0.2, now + idx * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.07);
      osc.stop(now + idx * 0.07 + 0.45);
    });
  }

  // Play candle blowout sound (gentle breath + twinkle)
  function playBlowSound() {
    if (isAudioMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // White noise puff
    const bufferSize = ctx.sampleRate * 0.25;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.08));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 800;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.25);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(now);

    // Follow with cheerful sparkle
    setTimeout(() => {
      playChimeSound();
    }, 200);
  }

  // Play celebratory fanfare
  function playCelebrationSound() {
    if (isAudioMuted) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [440, 554.37, 659.25, 880]; // A major arpeggio
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.25, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.65);
    });
  }

  // Initialize Background Music Controls
  function initAudioController() {
    if (config.audio && config.audio.hasCustomBgm && config.audio.bgmPath) {
      bgmAudio.src = config.audio.bgmPath;
      bgmAudio.volume = config.audio.volume || 0.5;
    }

    audioToggleBtn.addEventListener("click", () => {
      getAudioContext();
      if (!isAudioPlaying) {
        if (config.audio && config.audio.hasCustomBgm && config.audio.bgmPath) {
          bgmAudio.play().then(() => {
            isAudioPlaying = true;
            isAudioMuted = false;
            updateAudioButtonUI(true);
          }).catch(() => {
            // If custom file not available, still enable sound FX
            isAudioPlaying = true;
            isAudioMuted = false;
            updateAudioButtonUI(true);
            playChimeSound();
          });
        } else {
          isAudioPlaying = true;
          isAudioMuted = false;
          updateAudioButtonUI(true);
          playChimeSound();
        }
      } else {
        if (config.audio && config.audio.hasCustomBgm) {
          bgmAudio.pause();
        }
        isAudioPlaying = false;
        isAudioMuted = true;
        updateAudioButtonUI(false);
      }
    });
  }

  function updateAudioButtonUI(active) {
    if (active) {
      audioToggleBtn.classList.add("playing");
      audioIcon.textContent = "🔊";
      audioLabel.textContent = "Music On";
    } else {
      audioToggleBtn.classList.remove("playing");
      audioIcon.textContent = "🔇";
      audioLabel.textContent = "Music Off";
    }
  }


  // ===================================================================
  // 2. HIGH PERFORMANCE CONFETTI ENGINE (Vanilla Canvas)
  // ===================================================================
  const confettiParticles = [];
  const confettiColors = ["#F3B7D0", "#781D48", "#F5D061", "#FFF1E8", "#FF8DA1", "#D49B24"];

  function resizeConfettiCanvas() {
    if (!confettiCanvas) return;
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeConfettiCanvas);
  resizeConfettiCanvas();

  function triggerConfettiBurst(originX, originY, count = 60) {
    const ctx = confettiCanvas.getContext("2d");
    const ox = originX || window.innerWidth / 2;
    const oy = originY || window.innerHeight / 2;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 4;
      confettiParticles.push({
        x: ox,
        y: oy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3,
        size: Math.random() * 8 + 6,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        isHeart: Math.random() > 0.65,
        alpha: 1,
        life: 1
      });
    }

    if (!confettiAnimationRunning) {
      requestAnimationFrame(renderConfetti);
    }
  }

  let confettiAnimationRunning = false;
  function renderConfetti() {
    if (!confettiCanvas) return;
    const ctx = confettiCanvas.getContext("2d");
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22; // Gravity
      p.vx *= 0.98; // Air resistance
      p.rotation += p.rotationSpeed;
      p.life -= 0.012;
      p.alpha = Math.max(0, p.life);

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;

      if (p.isHeart) {
        // Draw cute mini heart
        ctx.beginPath();
        const topCurveHeight = p.size * 0.3;
        ctx.moveTo(0, topCurveHeight);
        ctx.bezierCurveTo(0, 0, -p.size / 2, 0, -p.size / 2, topCurveHeight);
        ctx.bezierCurveTo(-p.size / 2, (p.size + topCurveHeight) / 2, 0, p.size, 0, p.size * 1.3);
        ctx.bezierCurveTo(0, p.size, p.size / 2, (p.size + topCurveHeight) / 2, p.size / 2, topCurveHeight);
        ctx.bezierCurveTo(p.size / 2, 0, 0, 0, 0, topCurveHeight);
        ctx.closePath();
        ctx.fill();
      } else {
        // Draw festive ribbon confetti
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      }

      ctx.restore();

      if (p.life <= 0 || p.y > window.innerHeight + 50) {
        confettiParticles.splice(i, 1);
      }
    }

    if (confettiParticles.length > 0) {
      confettiAnimationRunning = true;
      requestAnimationFrame(renderConfetti);
    } else {
      confettiAnimationRunning = false;
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }


  // ===================================================================
  // 3. AMBIENT FLOATING PARTICLES (Stars & Floating Hearts)
  // ===================================================================
  const ambientStars = [];
  function initAmbientCanvas() {
    if (!ambientCanvas) return;
    ambientCanvas.width = window.innerWidth;
    ambientCanvas.height = window.innerHeight;
    const starCount = Math.floor(window.innerWidth / 25);

    for (let i = 0; i < starCount; i++) {
      ambientStars.push({
        x: Math.random() * ambientCanvas.width,
        y: Math.random() * ambientCanvas.height,
        size: Math.random() * 2.2 + 0.8,
        speedY: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.7 + 0.2,
        isHeart: Math.random() > 0.75,
        hue: Math.random() > 0.5 ? "#F3B7D0" : "#F5D061"
      });
    }

    renderAmbientCanvas();
  }

  function renderAmbientCanvas() {
    if (!ambientCanvas) return;
    const ctx = ambientCanvas.getContext("2d");
    ctx.clearRect(0, 0, ambientCanvas.width, ambientCanvas.height);

    ambientStars.forEach((star) => {
      star.y -= star.speedY;
      if (star.y < -10) {
        star.y = ambientCanvas.height + 10;
        star.x = Math.random() * ambientCanvas.width;
      }

      ctx.save();
      ctx.globalAlpha = star.opacity;
      ctx.fillStyle = star.hue;

      if (star.isHeart) {
        ctx.font = `${Math.floor(star.size * 5 + 6)}px sans-serif`;
        ctx.fillText("❤️", star.x, star.y);
      } else {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });

    requestAnimationFrame(renderAmbientCanvas);
  }

  window.addEventListener("resize", () => {
    if (ambientCanvas) {
      ambientCanvas.width = window.innerWidth;
      ambientCanvas.height = window.innerHeight;
    }
  });


  // ===================================================================
  // 4. SCENE NAVIGATION & TRANSITIONS
  // ===================================================================
  function goToScene(sceneNumber) {
    if (sceneNumber < 1 || sceneNumber > 6) return;

    // Hide all scenes
    document.querySelectorAll(".scene").forEach((s) => {
      s.classList.remove("active-scene");
    });

    // Show destination scene
    const target = document.getElementById(`scene-${sceneNumber}`);
    if (target) {
      target.classList.add("active-scene");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    currentScene = sceneNumber;

    // Update progress dots
    progressDots.forEach((dot, idx) => {
      if (idx + 1 === sceneNumber) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    // Special scene initialization
    if (sceneNumber === 3) {
      triggerConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.4, 40);
      playChimeSound();
    } else if (sceneNumber === 4) {
      renderMemories();
      renderLittleNotes();
    }
  }

  // Setup Progress Breadcrumb navigation
  progressDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const sceneNum = parseInt(dot.getAttribute("data-scene"), 10);
      goToScene(sceneNum);
    });
  });


  // ===================================================================
  // 5. SCENE 1: THE MYSTERIOUS DOOR INTERACTION 🚪
  // ===================================================================
  function initScene1() {
    const doorWrapper = document.getElementById("door-wrapper");
    const btnKnock = document.getElementById("btn-knock");
    const doorLeaf = document.getElementById("door-leaf");

    // Populate text from config
    if (config.scene1) {
      const s1Headline = document.getElementById("s1-headline");
      const s1Subtext = document.getElementById("s1-subtext");
      const s1BtnText = document.getElementById("s1-btn-text");
      const s1Hint = document.getElementById("s1-hint");
      if (s1Headline && config.scene1.headline) s1Headline.textContent = config.scene1.headline;
      if (s1Subtext && config.scene1.subtext) s1Subtext.textContent = config.scene1.subtext;
      if (s1BtnText && config.scene1.knockButtonText) s1BtnText.textContent = config.scene1.knockButtonText;
      if (s1Hint && config.scene1.hintText) s1Hint.textContent = config.scene1.hintText;
    }

    function handleKnock() {
      if (isDoorOpen) return;
      playKnockSound();

      // Animate knocker and rattle door
      doorWrapper.classList.add("knocking", "door-shaking");
      setTimeout(() => {
        doorWrapper.classList.remove("door-shaking");
      }, 500);

      // Open door after gentle knock pause
      setTimeout(() => {
        isDoorOpen = true;
        doorWrapper.classList.add("door-open");
        playChimeSound();
        triggerConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.45, 50);

        // Transition to Scene 2 after character peek reveal
        setTimeout(() => {
          goToScene(2);
        }, 1500);
      }, 900);
    }

    doorWrapper.addEventListener("click", handleKnock);
    btnKnock.addEventListener("click", handleKnock);

    // Keyboard support for door
    doorWrapper.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleKnock();
      }
    });
  }


  // ===================================================================
  // 6. SCENE 2: THE BOYFRIEND HAS ARRIVED 😂
  // ===================================================================
  function initScene2() {
    const btnShow = document.getElementById("btn-show-what-got");

    // Bind dialogue
    if (config.scene2) {
      const s2Dialogue = document.getElementById("s2-dialogue");
      const s2Sub = document.getElementById("s2-subdialogue");
      const s2Btn = document.getElementById("s2-btn-text");
      if (s2Dialogue && config.scene2.dialogue) s2Dialogue.textContent = config.scene2.dialogue;
      if (s2Sub && config.scene2.subDialogue) s2Sub.textContent = config.scene2.subDialogue;
      if (s2Btn && config.scene2.actionButtonText) s2Btn.textContent = config.scene2.actionButtonText;
    }

    btnShow.addEventListener("click", () => {
      playChimeSound();
      triggerConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.4, 40);
      goToScene(3);
    });
  }


  // ===================================================================
  // 7. SCENE 3: THE UNEXPECTED DANCE 🕺
  // ===================================================================
  function initScene3() {
    const s3DialogueEn = document.getElementById("s3-dialogue-en");
    const s3DialogueTe = document.getElementById("s3-dialogue-te");
    const s3ContinueText = document.getElementById("s3-continue-text");
    const btnReplayDance = document.getElementById("btn-replay-dance");
    const btnDanceContinue = document.getElementById("btn-dance-continue");
    const danceWrapper = document.getElementById("s3-dance-character-wrapper");
    const ratingButtons = document.querySelectorAll(".btn-rating");
    const ratingFeedback = document.getElementById("rating-feedback-text");
    const cheersContainer = document.getElementById("dance-cheers-container");

    if (config.scene3) {
      if (s3DialogueEn && config.scene3.englishDialogue) s3DialogueEn.textContent = config.scene3.englishDialogue;
      if (s3DialogueTe) {
        if (config.scene3.showTeluguDialogue && config.scene3.teluguDialogue) {
          s3DialogueTe.textContent = config.scene3.teluguDialogue;
          s3DialogueTe.style.display = "block";
        } else {
          s3DialogueTe.style.display = "none";
        }
      }
      if (s3ContinueText && config.scene3.continueButtonText) s3ContinueText.textContent = config.scene3.continueButtonText;
    }

    // Replay dance button
    btnReplayDance.addEventListener("click", () => {
      danceWrapper.classList.remove("anim-dance");
      void danceWrapper.offsetWidth; // Force CSS reflow
      danceWrapper.classList.add("anim-dance");
      playChimeSound();
      triggerConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.45, 45);

      // Add cheerful floating reaction badge
      const cheer = document.createElement("div");
      cheer.className = "cheer-badge";
      cheer.textContent = "🕺 Killing It!";
      cheersContainer.appendChild(cheer);
      setTimeout(() => cheer.remove(), 1200);
    });

    // Rating star buttons
    ratingButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        ratingButtons.forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
        playCelebrationSound();
        triggerConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.65, 35);

        const stars = btn.getAttribute("data-stars");
        if (stars === "100") {
          ratingFeedback.textContent = "💖 Certified Cutest Delivery Boy in the World! Full Marks!";
        } else if (stars === "10") {
          ratingFeedback.textContent = "🔥 10/10! Choreography inspired by sheer love and zero balance!";
        } else {
          ratingFeedback.textContent = "⭐ Oscar Jury has just unanimously awarded the Best Dance Award!";
        }
      });
    });

    btnDanceContinue.addEventListener("click", () => {
      playChimeSound();
      goToScene(4);
    });
  }


  // ===================================================================
  // 8. SCENE 4: OUR LITTLE WORLD ❤️ (MEMORIES, NOTES, GIFT)
  // ===================================================================
  function initScene4() {
    // Tabs Navigation
    const tabBtns = document.querySelectorAll(".world-tab");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetPaneId = btn.getAttribute("aria-controls");
        tabBtns.forEach((b) => {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        tabPanes.forEach((p) => {
          p.classList.remove("active");
          p.hidden = true;
        });

        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
        const activePane = document.getElementById(targetPaneId);
        if (activePane) {
          activePane.classList.add("active");
          activePane.hidden = false;
        }
        playChimeSound();
      });
    });

    // Mystery Gift Box Interaction
    const giftWrapper = document.getElementById("mystery-gift-wrapper");
    const giftSurpriseCard = document.getElementById("gift-surprise-card");
    const giftInstruction = document.getElementById("gift-instruction");

    function openGift() {
      if (isGiftOpened) return;
      isGiftOpened = true;
      giftWrapper.classList.add("gift-opened");
      playCelebrationSound();
      triggerConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.45, 80);

      setTimeout(() => {
        giftSurpriseCard.hidden = false;
        giftInstruction.textContent = "🎉 Lifetime Birthday Coupon Unlocked!";
      }, 400);
    }

    giftWrapper.addEventListener("click", openGift);
    giftWrapper.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openGift();
      }
    });

    // Scene 4 Continue button to Cake
    const btnWorldContinue = document.getElementById("btn-world-continue");
    btnWorldContinue.addEventListener("click", () => {
      playChimeSound();
      goToScene(5);
    });

    // Populate Mystery Gift configuration
    if (config.scene4 && config.scene4.mysteryGift) {
      const gTitle = document.getElementById("gift-surprise-title");
      const gMsg = document.getElementById("gift-surprise-message");
      if (gTitle && config.scene4.mysteryGift.surpriseTitle) gTitle.textContent = config.scene4.mysteryGift.surpriseTitle;
      if (gMsg && config.scene4.mysteryGift.surpriseMessage) gMsg.textContent = config.scene4.mysteryGift.surpriseMessage;
    }

    // Modal close button
    const photoModal = document.getElementById("photo-modal");
    const btnCloseModal = document.getElementById("btn-close-modal");
    if (btnCloseModal && photoModal) {
      btnCloseModal.addEventListener("click", () => {
        photoModal.close();
      });
      // Click outside backdrop to close
      photoModal.addEventListener("click", (e) => {
        if (e.target === photoModal) {
          photoModal.close();
        }
      });
    }
  }

  // Render Memories Grid
  function renderMemories() {
    const container = document.getElementById("memories-grid-container");
    if (!container) return;
    container.innerHTML = "";

    const memories = (config.scene4 && config.scene4.memories) || [];
    memories.forEach((mem, index) => {
      const card = document.createElement("article");
      card.className = "memory-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `View memory: ${mem.title}`);

      card.innerHTML = `
        <div class="memory-image-container">
          <img src="${mem.image}" alt="${mem.alt || mem.title}" class="memory-img" loading="lazy">
          <span class="memory-zoom-badge">🔍 Zoom</span>
        </div>
        <div class="memory-info">
          <span class="memory-date">${mem.date || ""}</span>
          <h3 class="memory-title">${mem.title}</h3>
          <p class="memory-caption">${mem.caption}</p>
        </div>
      `;

      // Handle graceful image error fallback (never show broken icons)
      const img = card.querySelector(".memory-img");
      img.addEventListener("error", function () {
        // Fallback to one of the built-in illustrated vector cards
        this.src = "assets/photos/deepika-01.svg";
      });

      // Click to open in full size modal
      function openLightbox() {
        const modal = document.getElementById("photo-modal");
        const modalImg = document.getElementById("modal-photo-img");
        const modalTitle = document.getElementById("modal-photo-title");
        const modalDate = document.getElementById("modal-photo-date");
        const modalCaption = document.getElementById("modal-photo-caption");

        modalImg.src = img.src;
        modalImg.alt = mem.alt || mem.title;
        modalTitle.textContent = mem.title;
        modalDate.textContent = mem.date || "";
        modalCaption.textContent = mem.caption;

        if (typeof modal.showModal === "function") {
          modal.showModal();
        } else {
          modal.setAttribute("open", "");
        }
        playChimeSound();
      }

      card.addEventListener("click", openLightbox);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox();
        }
      });

      container.appendChild(card);
    });
  }

  // Render Little Notes Grid
  function renderLittleNotes() {
    const container = document.getElementById("notes-grid-container");
    if (!container) return;
    container.innerHTML = "";

    const notes = (config.scene4 && config.scene4.littleNotes) || [];
    notes.forEach((note) => {
      const card = document.createElement("div");
      card.className = "note-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "article");

      card.innerHTML = `
        <div class="note-top-bar">
          <span class="note-icon">${note.icon || "💌"}</span>
          <span class="note-tag">${note.tag || "Sweet Note"}</span>
        </div>
        <h3 class="note-headline">${note.headline || ""}</h3>
        <p class="note-message">${note.message}</p>
      `;

      card.addEventListener("click", () => {
        playChimeSound();
        triggerConfettiBurst(window.innerWidth / 2, window.innerHeight / 2, 25);
      });

      container.appendChild(card);
    });
  }


  // ===================================================================
  // 9. SCENE 5: THE BIRTHDAY CAKE 🎂
  // ===================================================================
  function initScene5() {
    const btnBlow = document.getElementById("btn-blow-candles");
    const btnToLetter = document.getElementById("btn-to-letter");
    const celebrationCard = document.getElementById("wished-celebration-card");
    const flames = document.querySelectorAll(".flame");
    const smokes = document.querySelectorAll(".smoke");

    // Populate cake headlines from config
    if (config.scene5) {
      const s5Headline = document.getElementById("s5-headline");
      const s5Subtext = document.getElementById("s5-subtext");
      const s5BlowBtn = document.getElementById("s5-blow-btn-text");
      const s5WishedTitle = document.getElementById("s5-wished-title");
      const s5WishedSub = document.getElementById("s5-wished-subtext");
      const s5ToLetter = document.getElementById("s5-to-letter-text");

      if (s5Headline && config.scene5.headline) s5Headline.textContent = config.scene5.headline;
      if (s5Subtext && config.scene5.subtext) s5Subtext.textContent = config.scene5.subtext;
      if (s5BlowBtn && config.scene5.blowButtonText) s5BlowBtn.textContent = config.scene5.blowButtonText;
      if (s5WishedTitle && config.scene5.wishedHeadline) s5WishedTitle.textContent = config.scene5.wishedHeadline;
      if (s5WishedSub && config.scene5.wishedSubtext) s5WishedSub.textContent = config.scene5.wishedSubtext;
      if (s5ToLetter && config.scene5.continueToLetterText) s5ToLetter.textContent = config.scene5.continueToLetterText;
    }

    btnBlow.addEventListener("click", () => {
      if (isCandleBlown) return;
      isCandleBlown = true;

      // Extinguish flames
      flames.forEach((flame) => flame.classList.add("extinguished"));
      smokes.forEach((smoke) => smoke.classList.add("drift"));

      playBlowSound();
      triggerConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.45, 90);

      btnBlow.style.display = "none";
      celebrationCard.hidden = false;
      btnToLetter.hidden = false;
    });

    btnToLetter.addEventListener("click", () => {
      playChimeSound();
      goToScene(6);
    });
  }


  // ===================================================================
  // 10. SCENE 6: THE HEARTFELT LETTER 💌 & REPLAY SYSTEM
  // ===================================================================
  function initScene6() {
    const btnOpenLetter = document.getElementById("btn-open-letter");
    const letterPresenterStage = document.getElementById("letter-presenter-stage");
    const letterParchmentWrapper = document.getElementById("letter-parchment-wrapper");
    const typewriterTarget = document.getElementById("letter-typewriter-target");
    const btnSkipTypewriter = document.getElementById("btn-skip-typewriter");
    const btnReplayStory = document.getElementById("btn-replay-story");

    // Populate letter details from config
    if (config.scene6) {
      const s6Title = document.getElementById("s6-letter-title");
      const s6Quote = document.getElementById("s6-closing-quote");
      const s6Sender = document.getElementById("s6-sender-name");
      const s6Prompt = document.getElementById("s6-envelope-prompt");
      const s6OpenBtn = document.getElementById("s6-open-btn-text");
      const s6Date = document.getElementById("s6-letter-date");

      if (s6Title && config.scene6.letterTitle) s6Title.textContent = config.scene6.letterTitle;
      if (s6Quote && config.scene6.closingQuote) s6Quote.textContent = config.scene6.closingQuote;
      if (s6Sender && config.senderName) s6Sender.textContent = config.senderName;
      if (s6Prompt && config.scene6.envelopePrompt) s6Prompt.textContent = config.scene6.envelopePrompt;
      if (s6OpenBtn && config.scene6.openLetterButtonText) s6OpenBtn.textContent = config.scene6.openLetterButtonText;
      if (s6Date && config.birthdayDate) s6Date.textContent = config.birthdayDate;
    }

    // Typewriter effect state
    const letterLines = (config.scene6 && config.scene6.letterBody) || [
      "Dear Deepika,",
      "",
      "Happy Birthday! ❤️",
      "",
      "I hope today gives you a hundred reasons to smile, twenty reasons to laugh loudly, and zero stress!",
      "",
      "With lots of love,",
      config.senderName || "Your Delivery Boy ❤️"
    ];
    const fullLetterHtml = letterLines.map((line) => (line === "" ? "<br>" : `<p>${line}</p>`)).join("");

    function startTypewriter() {
      typewriterTarget.innerHTML = "";
      btnSkipTypewriter.style.display = "inline-block";

      let currentLineIdx = 0;
      let currentCharIdx = 0;
      let renderedHtml = "";

      // Create cursor element
      const cursor = document.createElement("span");
      cursor.className = "typewriter-cursor";

      function typeNextCharacter() {
        if (currentLineIdx >= letterLines.length) {
          // Finished typing
          if (cursor.parentNode) cursor.remove();
          btnSkipTypewriter.style.display = "none";
          triggerConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.5, 50);
          return;
        }

        const line = letterLines[currentLineIdx];

        if (line === "") {
          renderedHtml += "<br>";
          typewriterTarget.innerHTML = renderedHtml;
          typewriterTarget.appendChild(cursor);
          currentLineIdx++;
          currentCharIdx = 0;
          typewriterInterval = setTimeout(typeNextCharacter, 60);
          return;
        }

        if (currentCharIdx === 0) {
          renderedHtml += "<p>";
        }

        renderedHtml += line.charAt(currentCharIdx);
        typewriterTarget.innerHTML = renderedHtml + "</p>";
        typewriterTarget.appendChild(cursor);

        currentCharIdx++;
        if (currentCharIdx >= line.length) {
          renderedHtml += "</p>";
          currentLineIdx++;
          currentCharIdx = 0;
          typewriterInterval = setTimeout(typeNextCharacter, 120);
        } else {
          typewriterInterval = setTimeout(typeNextCharacter, 24);
        }
      }

      typeNextCharacter();
    }

    function skipTypewriter() {
      if (typewriterInterval) clearTimeout(typewriterInterval);
      typewriterTarget.innerHTML = fullLetterHtml;
      btnSkipTypewriter.style.display = "none";
      triggerConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.5, 40);
    }

    btnOpenLetter.addEventListener("click", () => {
      letterPresenterStage.style.display = "none";
      letterParchmentWrapper.hidden = false;
      playCelebrationSound();
      triggerConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.4, 60);
      startTypewriter();
    });

    btnSkipTypewriter.addEventListener("click", skipTypewriter);

    // REPLAY STORY RESET FUNCTION
    btnReplayStory.addEventListener("click", () => {
      // 1. Reset door
      const doorWrapper = document.getElementById("door-wrapper");
      if (doorWrapper) {
        doorWrapper.classList.remove("door-open", "knocking");
      }
      isDoorOpen = false;

      // 2. Reset candles
      const flames = document.querySelectorAll(".flame");
      const smokes = document.querySelectorAll(".smoke");
      const btnBlow = document.getElementById("btn-blow-candles");
      const celebrationCard = document.getElementById("wished-celebration-card");
      const btnToLetter = document.getElementById("btn-to-letter");
      flames.forEach((flame) => flame.classList.remove("extinguished"));
      smokes.forEach((smoke) => smoke.classList.remove("drift"));
      if (btnBlow) btnBlow.style.display = "inline-flex";
      if (celebrationCard) celebrationCard.hidden = true;
      if (btnToLetter) btnToLetter.hidden = true;
      isCandleBlown = false;

      // 3. Reset gift
      const giftWrapper = document.getElementById("mystery-gift-wrapper");
      const giftSurpriseCard = document.getElementById("gift-surprise-card");
      const giftInstruction = document.getElementById("gift-instruction");
      if (giftWrapper) giftWrapper.classList.remove("gift-opened");
      if (giftSurpriseCard) giftSurpriseCard.hidden = true;
      if (giftInstruction) giftInstruction.textContent = "Tap the gift box to unwrap your special surprise! 🎁";
      isGiftOpened = false;

      // 4. Reset letter
      if (typewriterInterval) clearTimeout(typewriterInterval);
      letterPresenterStage.style.display = "flex";
      letterParchmentWrapper.hidden = true;
      typewriterTarget.innerHTML = "";

      // 5. Navigate back to Scene 1
      playChimeSound();
      goToScene(1);
    });
  }


  // ===================================================================
  // 11. CHARACTER ASSETS CUSTOMIZATION & FALLBACK
  // ===================================================================
  function initCharacterAssets() {
    const portalCharImg = document.getElementById("portal-char-img");
    const s2CharImg = document.getElementById("s2-character-img");
    const s3CharImg = document.getElementById("s3-character-img");
    const s6CharImg = document.getElementById("s6-character-img");

    const imgMap = [
      { el: portalCharImg, fallback: "assets/character/peek.svg", custom: config.character?.customImages?.peek },
      { el: s2CharImg, fallback: "assets/character/wave.svg", custom: config.character?.customImages?.wave },
      { el: s3CharImg, fallback: "assets/character/dance.svg", custom: config.character?.customImages?.dance },
      { el: s6CharImg, fallback: "assets/character/holding-letter.svg", custom: config.character?.customImages?.holdingLetter }
    ];

    imgMap.forEach(({ el, fallback, custom }) => {
      if (!el) return;
      el.addEventListener("error", function () {
        this.src = fallback;
      });

      if (config.character && config.character.useCustomImages && custom) {
        el.src = custom;
      }
    });
  }


  // ===================================================================
  // 12. INITIALIZATION ON DOM READY
  // ===================================================================
  document.addEventListener("DOMContentLoaded", () => {
    initCharacterAssets();
    initAudioController();
    initAmbientCanvas();
    initScene1();
    initScene2();
    initScene3();
    initScene4();
    initScene5();
    initScene6();
  });

})();
