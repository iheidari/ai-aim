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

    const aim = document.getElementById("aim");
    const size = parseInt(aim.style.width.replace("px", "")) || 100;

    aim.style.left = left + "%";
    aim.style.top = top + "%";

    aim.style.width = size * 0.9 + "px";
    aim.style.height = size * 0.9 + "px";

    // increase the points
    let record = count();
    if (record < 10) {
      record = "0" + record;
    }
    document.getElementById("carrier").innerHTML = record;
  }
}
