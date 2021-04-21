document.getElementById("aim").style.left = Math.random() * 88 + "%";
document.getElementById("aim").style.top = Math.random() * 71 + 13 + "%";

let counter = 10;

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
  // move the aim
  // x -> 0 - 88
  // y -> 13 - 84  (0-71)+13
  if (counter > 0) {
    const left = Math.random() * 88;
    const top = Math.random() * 71 + 13;

    document.getElementById("aim").style.left = left + "%";
    document.getElementById("aim").style.top = top + "%";

    // increase the points
    let record = count();
    if (record < 10) {
      record = "0" + record;
    }
    document.getElementById("carrier").innerHTML = record;
  }
}
