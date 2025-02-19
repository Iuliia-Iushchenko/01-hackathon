import { Module } from "../core/module";
import { random } from "../utils";

export class ShapeModule extends Module {
  constructor() {
    super("shape", "Случайная фигура");
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

    moduleContainer.classList.add("screen");
    const body = document.querySelector("body");
    const circle = document.createElement("div");
    const sizeWidth = random(10, 200);
    const sizeHeight = random(10, 200);
    const { width, height } = body.getBoundingClientRect();
    const x = random(0, width - sizeHeight);
    const y = random(0, height - sizeWidth);

    circle.style.position = "absolute";
    circle.classList.add("circle");
    circle.style.width = `${sizeWidth}px`;
    circle.style.height = `${sizeHeight}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.borderRadius = `${random(0, 50)}%`;

    let color = `RGB(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
    circle.style.background = color;
    circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

    body.append(moduleContainer);
    moduleContainer.append(circle);
    let i = 0;
    setInterval(() => {
      circle.style.transform = `rotate(${i}deg)`;
      i++;
    }, 20);
  }
}
