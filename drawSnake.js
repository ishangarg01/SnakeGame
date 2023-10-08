export default function drawSnake(oldSnake, newSnake) {
  eraseOldSnake(oldSnake);
  createNewSnake(newSnake);
}

function eraseOldSnake(oldSnake) {
  for (let i = 0; i < oldSnake.length; i++) {
    let pixelI = oldSnake[i][0];
    let pixelJ = oldSnake[i][1];
    let pixelLocation = pixelI + " " + pixelJ;
    document.getElementById(pixelLocation).style.backgroundColor = "white";
    document.getElementById(pixelLocation).className = "canvasclass";
  }
}

function createNewSnake(newSnake) {
  for (let i = 0; i < newSnake.length; i++) {
    let pixelI = newSnake[i][0];
    let pixelJ = newSnake[i][1];
    let pixelLocation = pixelI + " " + pixelJ;
    document.getElementById(pixelLocation).style.backgroundColor = "black";
    document.getElementById(pixelLocation).className = "snake";
  }
}

console.log("drawSnake");
