let counter = 60;

const timer = document.getElementById("timer");

timer.innerText = counter;

const intervlTimer = setInterval(function () {
  counter = counter - 1;
  let text = counter;
  if (counter < 10) {
    text = "0" + text;
  }
  timer.innerText = text;
  if (counter === 0) {
    clearInterval(intervlTimer);
  }
}, 1000);
