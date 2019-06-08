import nav from "./nav";
import { top, bottom } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

const button = makeButton("Yay! a real button!");
button.onclick = () => alert("hi!");
document.body.append(button);

// console.log(
//   nav(),
//   top,
//   bottom,
//   makeButton("My first button!"),
//   makeColorStyle("cyan")
// );
