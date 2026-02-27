let totalMilliseconds = 0;
let timerInterval = null;

function startTimer() {
  if (timerInterval) return;

  if (totalMilliseconds === 0) {
    const h = parseInt(document.getElementById("hours").value) || 0;
    const m = parseInt(document.getElementById("minutes").value) || 0;
    const s = parseInt(document.getElementById("seconds").value) || 0;

    totalMilliseconds = (h * 3600 + m * 60 + s) * 1000;

    if (totalMilliseconds <= 0) {
      alert("Please enter a valid time.");
      return;
    }
  }

  timerInterval = setInterval(() => {
    if (totalMilliseconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Time's up!");
      return;
    }

    totalMilliseconds -= 10;
    updateDisplay();
  }, 10);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  totalMilliseconds = 0;
  updateDisplay();
  document.getElementById("hours").value = "";
  document.getElementById("minutes").value = "";
  document.getElementById("seconds").value = "";
}

function updateDisplay() {
  const totalSeconds = Math.floor(totalMilliseconds / 1000);
  const ms = Math.floor((totalMilliseconds % 1000) / 10);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  document.getElementById("timeDisplay").textContent =
    String(h).padStart(2, "0") +
    ":" +
    String(m).padStart(2, "0") +
    ":" +
    String(s).padStart(2, "0") +
    ":" +
    String(ms).padStart(2, "0");
}
