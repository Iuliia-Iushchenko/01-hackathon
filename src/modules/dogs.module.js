import { Module } from "../core/module";

export class Dogs extends Module {
  constructor() {
    super("dogs", "Посмотреть на веселую собаку");
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

    let url = "https://dog.ceo/api/breeds/image/random";

    async function fetchDogs() {
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        let data = await response.json();

        let imgContainer = document.createElement("div");
        moduleContainer.append(imgContainer);
        imgContainer.style.display = "flex";
        imgContainer.style.justifyContent = "center";
        imgContainer.style.alignItems = "center";

        const img = document.createElement("img");
        img.src = data.message;
        img.style.margin = "25%";
        img.style.border = "5px solid burlywood";
        document.body.append(moduleContainer);
        imgContainer.append(img);
      } catch (err) {
        console.log(err);
      }
    }
    fetchDogs();
  }
}
