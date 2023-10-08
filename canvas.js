let canvas = document.getElementById("canvas");

export let N = 25;
export let PIXEL = 20;
export let ROWS = N;
export let COLS = N;

function initializeCanvas() {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      let pixel = document.createElement("div");
      pixel.style.position = "absolute";
      pixel.style.width = PIXEL + "px";
      pixel.style.height = PIXEL + "px";
      pixel.style.border = "1px solid black";
      pixel.style.left = j * PIXEL + "px";
      pixel.style.top = i * PIXEL + "px";
      pixel.style.backgroundColor = "white";
      pixel.id = i + " " + j;
      canvas.append(pixel);
    }
  }
}

initializeCanvas();
