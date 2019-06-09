import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import "./footer.css";
import "./button.css";

const button = makeButton("Yay! a real button!");
button.style = makeColorStyle("orange");
button.onclick = () => alert("awesome!");
document.body.append(button);
document.body.append(footer);

// console.log(
//   nav(),
//   top,
//   bottom,
//   makeButton("My first button!"),
//   makeColorStyle("cyan")
// );
