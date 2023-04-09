let timerId = null;
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);
stopBtn.setAttribute('disabled', '');
function onStart(e) {
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled', '');
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function onStop(e) {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled', '');
  stopBtn.setAttribute('disabled', '');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
