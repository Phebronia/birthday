const surpriseButton = document.getElementById("surpriseButton");
const messageModal = document.getElementById("messageModal");
const closeMessageButton = document.getElementById("closeMessage");
const heroConfetti = document.getElementById("heroConfetti");

const confettiColors = ["#ff7ab5", "#ffc84d", "#9f75ff", "#81ccff", "#ff94c6", "#ffffff"];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createConfetti() {
  for (let index = 0; index < 34; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${randomBetween(2, 98)}%`;
    piece.style.top = `${randomBetween(12, 86)}%`;
    piece.style.background = confettiColors[index % confettiColors.length];
    piece.style.transform = `rotate(${randomBetween(0, 360)}deg)`;
    piece.style.animationDelay = `${randomBetween(0, 4)}s`;

    if (index % 4 === 0) {
      piece.style.borderRadius = "50%";
      piece.style.width = "6px";
      piece.style.height = "6px";
    }

    heroConfetti.appendChild(piece);
  }
}

function openMessage() {
  messageModal.classList.add("is-open");
  messageModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeMessage() {
  messageModal.classList.remove("is-open");
  messageModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

surpriseButton.addEventListener("click", openMessage);
closeMessageButton.addEventListener("click", closeMessage);

messageModal.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close-modal")) {
    closeMessage();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && messageModal.classList.contains("is-open")) {
    closeMessage();
  }
});

createConfetti();
