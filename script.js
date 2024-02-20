//script.js
let startTime;
let running = false;
let lapCount = 1;

function start() {
  if (!running) {
    startTime = new Date().getTime();
    running = true;
    runTimer();
  }
}

function pause() {
  running = false;
}

function reset() {
  running = false;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").textContent = "";
  lapCount = 1;
}

function lap() {
  if (running) {
    const lapTime = new Date().getTime() - startTime;
    const formattedTime = formatTime(lapTime);
    const lapItem = document.createElement("div");
    lapItem.textContent = `Lap ${lapCount}: ${formattedTime}`;
    document.getElementById("laps").appendChild(lapItem);
    lapCount++;
  }
}

function runTimer() {
  if (running) {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    document.getElementById("display").textContent = formattedTime;
    setTimeout(runTimer, 10);
  }
}

function formatTime(time) {
  let hours = Math.floor(time / 3600000);
  let minutes = Math.floor((time % 3600000) / 60000);
  let seconds = Math.floor((time % 60000) / 1000);
  let milliseconds = Math.floor(time % 1000);
  return (
    pad(hours) + ":" + pad(minutes) + ":" + pad(seconds)
  );
}

function pad(num) {
  return num.toString().padStart(2, "0");
}
