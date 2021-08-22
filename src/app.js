import "./styles.css";
import { ContextMenu } from "./menu";

const contextMenu = new ContextMenu();

const createTitle = () => {
  const title = document.createElement("h1");
  title.className = "title";
  title.style.fontSize = "45px";
  title.style.textAlign = "center";
  title.textContent = "Нажми правой кнопкой и выбери действие";
  document.body.append(title);
};

createTitle();

contextMenu.open();
contextMenu.close();
contextMenu.add();
