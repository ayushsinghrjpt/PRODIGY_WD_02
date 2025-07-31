let [mili,seconds, minutes, hours] = [0, 0, 0, 0];
let displayTime = document.getElementById("time");
let timer = null;

function stopwatch() {
  mili++;
  if (mili === 100) {
   mili=0;
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
}

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = mili < 10 ? "0" + mili : mili;

 displayTime.innerHTML = `${h}:${m}:${s}.<span class="ms">${ms}</span>`;
}

function start() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 10);
}

function pause() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  [mili ,seconds, minutes, hours] = [0, 0, 0, 0];
  displayTime.innerText = "00:00:00:00";
}
