const timer = document.querySelector(".stopwatch");
const castDivision = document.querySelector(".time");
let hour = 0,
  minutes = 0,
  seconds = 0,
  millisec = 0;

let intervelID = null;

let count = 1;
function startTimer() {
  if (!intervelID) {
    intervelID = setInterval(() => {
      if (minutes === 60) {
        hour++;
        minutes = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      if (millisec === 1000) {
        seconds++;
        millisec = 0;
      }
      millisec += 10;
      timer.textContent = `${hour < 10 ? "0" + hour : hour} : ${
        minutes < 10 ? "0" + minutes : minutes
      } : ${seconds < 10 ? "0" + seconds : seconds} : ${
        millisec < 10
          ? "00" + millisec
          : millisec < 100
          ? "0" + millisec
          : millisec
      }`;
    }, 10);
  }
}
function pauseTimer() {
  if (intervelID) {
    clearInterval(intervelID);
    intervelID = null;
  }
}
function resetTimer() {
  if (intervelID) {
    clearInterval(intervelID);
    intervelID = null;
  }
  hour = 0;
  minutes = 0;
  seconds = 0;
  millisec = 0;
  timer.textContent = "00 : 00 : 00 : 000";
  castDivision.innerHTML = "";
  count = 1;
}

function castTimer() {
  let p = document.createElement("p");
  p.clasecondsName = "cast-item";
  p.textContent =
    `CAST ${count} : ` +
    `${hour < 10 ? "0" + hour : hour} : ${
      minutes < 10 ? "0" + minutes : minutes
    } : ${seconds < 10 ? "0" + seconds : seconds} : ${
      millisec < 10
        ? "00" + millisec
        : millisec < 100
        ? "0" + millisec
        : millisec
    }`;
  count++;
  castDivision.appendChild(p);
}
