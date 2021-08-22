import { Module } from "../core/module";

export class TimerModule extends Module {
  constructor() {
    super("timer", "Создать таймер");
  }
  trigger() {
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
    const createTimer = () => {
      const body = document.querySelector("body");
      body.append(moduleContainer);
      const paragraph = document.createElement("p");
      paragraph.textContent = "Введите время в минутах";
      paragraph.style = "margin-bottom: 8px; font-size: 24px;";
      moduleContainer.append(paragraph);
      const div = document.createElement("div");
      moduleContainer.append(div);
      const input = document.createElement("input");
      input.style = "margin-bottom: 8px; margin-left: 40px; font-size: 16px;";
      div.append(input);
      moduleContainer.append(div);
      const button = document.createElement("button");
      button.style = "font-size: 24px; padding: 8px; margin-left: 40px;";
      button.textContent = "Подтвердить";
      moduleContainer.append(button);
      const h1 = document.createElement("h1");
      h1.style = "margin-left: 60px;";
      h1.textContent = "00:00:00";
      moduleContainer.append(h1);

      button.addEventListener("click", function () {
        let valueOfTime = input.value;
        input.value = "";
        button.setAttribute("disabled", "disabled");
        let timeMinut = parseInt(valueOfTime) * 60;
        let timer = setInterval(function () {
          let seconds = timeMinut % 60;
          let minuts = (timeMinut / 60) % 60;
          let hours = (timeMinut / 60 / 60) % 60;
          let strTimer = `${
            Math.trunc(hours) < 10 ? `0${Math.trunc(hours)}` : Math.trunc(hours)
          }:${
            Math.trunc(minuts) < 10
              ? `0${Math.trunc(minuts)}`
              : Math.trunc(minuts)
          }:${seconds < 10 ? `0${seconds}` : seconds}`;
          h1.textContent = strTimer;
          timeMinut--;
          if (timeMinut <= 0) {
            clearInterval(timer);
            h1.textContent = "Время истекло";
            button.removeAttribute("disabled");
          }
        }, 1000);
      });
    };
    createTimer();
  }
}
