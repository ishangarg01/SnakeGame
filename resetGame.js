import { N, PIXEL, ROWS, COLS } from "./canvas.js";

export default function resetCanvas() {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      let position = i + " " + j;
      document.getElementById(position).style.backgroundColor = "white";
    }
  }
  document.getElementById("current-score").innerHTML = 0 + "";
}
