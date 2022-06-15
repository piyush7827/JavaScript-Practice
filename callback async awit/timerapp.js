let millisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;
let day = 0;

setInterval(function () {
  millisecond = parseInt(millisecond + 1);

  if (millisecond < 10) {
    millisecond = "00" + millisecond;
  }
  if (millisecond === 1000) {
    second++;
    millisecond = "000";
  }
  if (second === 60) {
    second = 0;
    minute++;
  }

  document.getElementById("millisecond").innerText = millisecond;
}, 1);
