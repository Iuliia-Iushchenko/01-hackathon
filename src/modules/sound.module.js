import { random } from "../utils";
import { Module } from "../core/module";

const sounds = [
  "https://orangefreesounds.com/wp-content/uploads/2021/05/Medium-sized-dog-barks.mp3",
  "https://orangefreesounds.com/wp-content/uploads/2021/08/Cat-meowing-sound-effect.mp3",
  "https://orangefreesounds.com/wp-content/uploads/2021/08/Bicycle-bell-ring-sound-effect.mp3",
  "https://orangefreesounds.com/wp-content/uploads/2017/11/Old-school-funk-guitar-riff.mp3",
  "https://orangefreesounds.com/wp-content/uploads/2014/11/Amen-break.mp3",
];

export class Sound extends Module {
  constructor() {
    super("audio", "Случайный звук");
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

    let currentAudio = document.querySelector("#currentAudio");
    if (currentAudio) {
      currentAudio.remove();
    }
    this.playSound(sounds[random(0, sounds.length - 1)]);
  }

  playSound(soundUrl) {
    let otherModule = document.querySelector(".module");
    if (otherModule) {
      otherModule.remove();
    }
    let moduleContainer = document.createElement("div");
    moduleContainer.className = "module";

    let audio = new Audio(soundUrl);
    let body = document.querySelector("body");
    audio.id = "currentAudio";
    body.append(moduleContainer);
    moduleContainer.append(audio);
    audio.play();
  }
}
