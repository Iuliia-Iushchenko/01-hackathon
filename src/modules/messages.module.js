import { random } from "../utils";
import { Module } from "../core/module";

export class Message extends Module {
  constructor() {
    super("message", "Случайное сообщение");
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
    const URL = "https://www.breakingbadapi.com/api/quotes";

    const showQuote = async () => {
      try {
        const response = await fetch(URL, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Произошла ошибка в получении цитаты");
        }
        const data = await response.json();
        const index = random(0, data.length);
        const quote = data[index];

        const titleHTML = document.createElement("h1");
        titleHTML.textContent = `Quote from ${quote.series}`;
        titleHTML.style.fontSize = "30px";

        const quoteHTML = document.createElement("blockquote");
        quoteHTML.textContent = `— ${quote.quote}`;
        quoteHTML.style.display = "block";
        quoteHTML.style.fontSize = "20px";
        quoteHTML.style.paddingTop = "15px";
        quoteHTML.style.color = "red";

        const authorHTML = document.createElement("cite");
        authorHTML.textContent = `© ${quote.author}`;
        authorHTML.style.display = "block";
        authorHTML.style.fontSize = "16px";
        authorHTML.style.paddingTop = "15px";

        moduleContainer.append(titleHTML, quoteHTML, authorHTML);
        document.body.append(moduleContainer);

        moduleContainer.style.width = "400px";
        moduleContainer.style.wordWrap = "break-word";
      } catch (error) {
        console.log(error);
      }
    };
    showQuote();
  }
}
