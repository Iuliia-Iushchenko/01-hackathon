import { Module } from "../core/module";
import { random } from "../utils";

export class ClicksModule extends Module {
  constructor() {
    super("click", "Считать клики");
  }

  trigger() {
    this.createElement();
    const shape = document.querySelector(".click__shape");
    const timeValue = document.querySelector("#time");

    let score = 0;
    let time = parseInt(timeValue.getAttribute("data-time"));
    console.log(time);
    start(time);

    shape.addEventListener("click", clickCounter);

    function clickCounter(event) {
      if (event.target.classList.contains("click__shape")) {
        score += 1;
        console.log(score);
      }
    }

    function start(time) {
      setInterval(decreaseTime, 1000);
      timer(time);
    }

    function timer(value) {
      let timeEl = document.querySelector("#time");
      timeEl.innerHTML = `00:${value}`;
      console.log(value);
    }

    function decreaseTime() {
      if (time === 0) {
        finish(score);
      } else {
        let current = --time;
        console.log("current", current);
        if (current < 10) {
          current = `0${current}`;
        }
        timer(current);
      }
    }

    function finish(score) {
      const shape = document.querySelector(".click__shape");
      shape.textContent = `Счет: ${score}`;
      shape.removeEventListener("click", clickCounter);
    }
  }

  createElement() {
    const screen = document.createElement("div");
    screen.className = "screen";

    const timer = document.createElement("h3");
    timer.textContent = "Осталось ";
    const timerSpan = document.createElement("span");
    timerSpan.id = "time";
    let second1 = random(1, 2);
    let second2 = random(0, 9);
    timerSpan.textContent = `00:${second1}${second2}`;
    timerSpan.dataset.time = `${second1}${second2}`;

    const shape = document.createElement("div");
    shape.className = "click__shape";
    shape.textContent = "Click me";

    timer.append(timerSpan);
    screen.append(timer, shape);
    document.body.append(screen);
  }
}
