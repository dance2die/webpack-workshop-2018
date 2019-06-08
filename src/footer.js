import { red, blue } from "./button-styles";

const top = document.createElement("div");
top.innerHTML = `<strong>top? of footer</strong>`;
top.style = red;

const bottom = document.createElement("div");
bottom.innerHTML = `<strong>bottom of footer</strong>`;
bottom.style = blue;

const footer = document.createElement("footer");
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
