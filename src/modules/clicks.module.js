import { Module } from "../core/module";
import { random } from "../utils";

export class ClicksModule extends Module {
  constructor() {
    super("click", "Считать клики");
  }

  trigger() {
    let otherModule = document.querySelector(".module");
    if (otherModule) {
      otherModule.remove();
    }

    this.createElement();

    const shape = document.querySelector(".click__shape");
    const timeValue = document.querySelector(".time");

    let score = 0;
    let intervalId = null;
    let time = parseInt(timeValue.getAttribute("data-time"));
    start(time);

    shape.addEventListener("click", clickCounter);

    function clickCounter(event) {
      event.preventDefault();
      if (event.target.classList.contains("click__shape")) {
        score += 1;
      }
    }

    function start(time) {
      intervalId = setInterval(decreaseTime, 1000);
      timer(time);
    }

    function timer(value) {
      let timeEl = document.querySelector(".time");
      if (timeEl === null) {
        clearInterval(intervalId);
      } else {
        timeEl.innerHTML = `00:${value}`;
      }
    }

    function decreaseTime() {
      if (time === 0) {
        finish(score);
      } else {
        let current = --time;
        if (current < 10) {
          current = `0${current}`;
        }
        timer(current);
      }
    }

    function finish(score) {
      clearInterval(intervalId);
      const shape = document.querySelector(".click__shape");
      shape.textContent = `Счет: ${score}`;
      shape.removeEventListener("click", clickCounter);
    }
  }

  createElement() {
    /* Создаем контейнер для модуля, 
    удаляем результаты работы лишних моделей
    */
    let otherModule = document.querySelector(".module");
    if (otherModule) {
      otherModule.remove();
    }
    let moduleContainer = document.createElement("div");
    moduleContainer.className = "module";
    //-------------------------------------------

    moduleContainer.classList.add("screen");

    const timer = document.createElement("h3");
    timer.className = "timerText";
    timer.textContent = "Осталось ";
    const timerSpan = document.createElement("span");
    timerSpan.className = "time";
    let second1 = random(1, 2);
    let second2 = random(0, 9);
    timerSpan.textContent = `00:${second1}${second2}`;
    timerSpan.dataset.time = `${second1}${second2}`;

    const shape = document.createElement("div");
    shape.style.userSelect = "none";
    shape.style.cursor = "pointer";
    shape.className = "click__shape";
    shape.textContent = "Click me";

    timer.append(timerSpan);
    moduleContainer.append(timer, shape);
    document.body.append(moduleContainer);
  }
}
