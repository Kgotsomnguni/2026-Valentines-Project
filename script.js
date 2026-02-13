const envelope = document.getElementById("envelope");
const card = document.getElementById("card");
const finalScreen = document.getElementById("final");
const yesBtn = document.getElementById("yesBtn");
const typing = document.getElementById("typing");
const nameEl = document.getElementById("name");
const confetti = document.getElementById("confetti");
const loveSound = document.getElementById("loveSound");
const floatingHearts = document.querySelector(".floating-hearts");

const herName = "Kefilwe Khumalo 💕"; // HER NAME
nameEl.textContent = herName;

let holdTimer;

// Create floating hearts inside card
for(let i=0;i<20;i++){
  const h = document.createElement("div");
  h.textContent = "💖";
  h.style.left = `${Math.random()*100}%`;
  h.style.animationDelay = `${Math.random()*5}s`;
  h.style.fontSize = `${12+Math.random()*18}px`;
  floatingHearts.appendChild(h);
}

// Tap & hold envelope
envelope.addEventListener("touchstart", () => holdTimer = setTimeout(openEnvelope, 600));
envelope.addEventListener("mousedown", () => holdTimer = setTimeout(openEnvelope, 600));
envelope.addEventListener("touchend", () => clearTimeout(holdTimer));
envelope.addEventListener("mouseup", () => clearTimeout(holdTimer));
envelope.addEventListener("mouseleave", () => clearTimeout(holdTimer));

function openEnvelope() {
  envelope.classList.add("open");
  setTimeout(() => {
    envelope.style.display = "none";
    card.classList.remove("hidden");
  }, 900);
}

// YES button click
yesBtn.addEventListener("click", () => {
  card.classList.add("hidden");
  finalScreen.classList.remove("hidden");
  typeText(`I Love You, ${herName} 💖`);
  explodeConfetti();
  setTimeout(confettiRain, 1200);
  loveSound.play();
  if (navigator.vibrate) navigator.vibrate([200,100,200]);
});

// Typing animation
function typeText(text) {
  let i = 0;
  typing.textContent = "";
  const interval = setInterval(() => {
    typing.textContent += text[i++];
    if (i >= text.length) {
      clearInterval(interval);
      document.querySelector(".signature").classList.add("show");
    }
  }, 120);
}

// Confetti explosion
function explodeConfetti() {
  for(let i=0;i<30;i++){
    const h = document.createElement("div");
    h.className = "confetti-heart";
    h.textContent = "💖";
    h.style.left = "50%";
    h.style.top = "50%";
    confetti.appendChild(h);
    setTimeout(()=>h.remove(),1500);
  }
}

// Soft heart rain
function confettiRain() {
  for(let i=0;i<40;i++){
    const h = document.createElement("div");
    h.className = "confetti-heart";
    h.textContent = "💗";
    h.style.left = `${Math.random()*100}vw`;
    h.style.top = `-20px`;
    h.style.fontSize = `${12+Math.random()*15}px`;
    h.style.animation = "rain 3s linear forwards";
    confetti.appendChild(h);
    setTimeout(()=>h.remove(),3000);
  }
}
