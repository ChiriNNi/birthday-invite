const eventDate = new Date("2025-08-06T18:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = eventDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

let count = 0;
const display = document.getElementById("childCountDisplay");
const input = document.getElementById("childCountInput");

function changeCount(delta) {
  count = Math.max(0, count + delta);
  display.textContent = count;
  input.value = count;
}

const music = document.getElementById('bg-music');
const toggleButton = document.getElementById('music-toggle');
let isPlaying = false;

toggleButton.addEventListener('click', () => {
  if (!isPlaying) {
    music.play().then(() => {
      toggleButton.textContent = '🔇';
      isPlaying = true;
    }).catch(err => {
      console.warn('Не удалось воспроизвести музыку:', err);
    });
  } else {
    music.pause();
    toggleButton.textContent = '🔊';
    isPlaying = false;
  }
});