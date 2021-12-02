let minutes = '00';
let seconds = '00';
let miliseconds = '00';
const stopWatch = document.querySelector('.stopwatch');
const clock = document.querySelector('.clock');
const hoursContainer = document.querySelector('.hours');
const clockMinuteContainer = document.querySelector('.clock-minutes');
const clockSecondsContainer = document.querySelector('.clock-seconds');
const minuteContainer = document.querySelector('.minutes');
const secondsContainer = document.querySelector('.seconds');
const miliContainer = document.querySelector('.miliseconds');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const stopBtn = document.querySelector('.stop');
const checkbox = document.querySelector('.checkbox');

let interval = setInterval(updateClock, 500);

const start = () => {
  miliseconds++;
  if (miliseconds < 9) {
    miliContainer.innerHTML = '0' + miliseconds;
  }
  if (miliseconds > 9) {
    miliContainer.innerHTML = miliseconds;
  }
  if (miliseconds > 99) {
    seconds++;
    secondsContainer.innerHTML = '0' + seconds;
    miliseconds = 0;
    miliContainer.innerHTML = '00';
  }
  if (seconds > 9) {
    secondsContainer.innerHTML = seconds;
  }
  if (seconds == 59) {
    minutes++;
    minuteContainer.innerHTML = '0' + minutes;
    seconds = 0;
    secondsContainer.innerHTML = '00';
  }
  if (minutes > 9) {
    minuteContainer.innerHTML = minutes;
  }
};

checkbox.addEventListener('change', () => {
  reset();
  stopWatch.classList.toggle('hidden');
  clock.classList.toggle('hidden');
  if (checkbox.checked) {
    interval = setInterval(updateClock, 500);
  }
});

startBtn.addEventListener('click', () => {
  if (!checkbox.checked) {
    interval = setInterval(start, 10);
  }
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
});

resetBtn.addEventListener('click', () => {
  reset();
});

const reset = () => {
  clearInterval(interval);
  miliseconds = '00';
  seconds = '00';
  minutes = '00';
  miliContainer.innerHTML = miliseconds;
  secondsContainer.innerHTML = seconds;
  minuteContainer.innerHTML = minutes;
};

function updateClock() {
  const date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  hoursContainer.innerHTML = hour;
  clockMinuteContainer.innerHTML = minutes;
  clockSecondsContainer.innerHTML = seconds;
}
