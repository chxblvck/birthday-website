const colors = ["#ff5c8a", "#ffd166", "#cdb4db"];

for (let i = 0; i < 90; i++) {
  const confetti = document.createElement("div");
  confetti.style.position = "fixed";
  confetti.style.width = "8px";
  confetti.style.height = "8px";
  confetti.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.top = "-10px";
  confetti.style.borderRadius = "50%";
  confetti.style.opacity = "0.8";
  confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
  document.body.appendChild(confetti);

  setTimeout(() => confetti.remove(), 5000);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(110vh); }
}`;
document.head.appendChild(style);

