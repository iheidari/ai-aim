let counter = 30;

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
var count = (function () {
  var counter = 0;
  return function () {
    return (counter += 1);
  };
})();
function displaycount() {
  let record = count();
  if (record < 10) {
    record = "0" + record;
  }
  document.getElementById("carrier").innerHTML = record;
}
