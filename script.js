const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const resetArchiveBtn = document.querySelector(".reset-archives");
const archiveBtn = document.querySelector(".archives");
const time = document.querySelector(".live-time");
const stopTime = document.querySelector(".stopTime");
const archive = document.querySelector(".memo");
const archiveList = document.querySelector(".memo-list");

let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

let archiveArray = [];

const startTimer = () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    time.textContent = `${hours === 0 ? "" : hours + ":"}${
      minutes === 0 ? "0" : minutes < 10 ? "0" + minutes : minutes
    }:${seconds === 0 ? "00" : seconds < 10 ? "0" + seconds : seconds}`;
  }, 1000);
};

const stopTimer = () => {
  stopTime.textContent = `Stopped at: ${time.textContent}`;
  archiveArray.push(time.textContent);

  const archiveItem = document.createElement("li");
  archiveItem.textContent = time.textContent;
  archiveList.appendChild(archiveItem);

  stopTime.style.visibility = "visible";
  startBtn.disabled = false;
  stopBtn.disabled = true;

  clearInterval(timer);
};

const resetTimer = () => {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  time.textContent = "0:00";
  stopTime.style.visibility = "hidden";
  startBtn.disabled = false;
  stopBtn.disabled = false;
};

const resetArchive = () => {
  archiveArray = [];
  archiveList.innerHTML = "";
};

const showArchive = () => {
  archive.classList.toggle("show");
};

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
resetArchiveBtn.addEventListener("click", resetArchive);
archiveBtn.addEventListener("click", showArchive);
