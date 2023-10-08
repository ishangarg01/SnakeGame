import drawSnake from "./drawSnake.js";
import drawCandy from "./drawCandy.js";
import addScore from "./score.js";
import highScore from "./highScore.js";
import resetCanvas from "./resetGame.js";
import { N } from "./canvas.js";
// let N = 50;

let initialSnake = [
  [12, 10],
  [12, 11],
  [12, 12],
  [12, 13],
];

let initialSnakecopy = initialSnake.slice();

let direction = "stop";

function generateCandies() {
  if (direction != "stop") {
    let x = Math.floor(Math.random() * (N - 1) + 1);
    let y = Math.floor(Math.random() * (N - 1) + 1);
    drawCandy(x, y);
    let time = Math.random() * 9000 + 7000;

    setTimeout(generateCandies, time);
  }
}

function handleLeftArrowKeyPress() {
  if (direction === "left") {
    direction = "down";
  } else if (direction === "right") {
    direction = "up";
  } else if (direction === "up") {
    direction = "left";
  } else if (direction === "down") {
    direction = "right";
  } else {
    direction = "down";
    generateCandies();
    console.log("----------------");
  }
}

function handleRightArrowKeyPress() {
  if (direction === "left") {
    direction = "up";
  } else if (direction === "right") {
    direction = "down";
  } else if (direction === "up") {
    direction = "right";
  } else if (direction === "down") {
    direction = "left";
  } else {
    direction = "up";
    generateCandies();
    console.log("----------------");
  }
}

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowRight":
      handleRightArrowKeyPress();
      break;
    case "ArrowLeft":
      handleLeftArrowKeyPress();
      break;
  }
});

document.addEventListener("keydown", function () {
  console.log("Current direction:", direction);
});

function moveSnake() {
  let outsideGrid = false;
  let oldSnake = initialSnake.slice();
  let newSnake = initialSnake.slice();
  let newPixeli = oldSnake[0][0];
  let newPixelj = oldSnake[0][1];
  if (direction === "left") {
    newSnake.pop();
    newPixeli = oldSnake[0][0];
    newPixelj = oldSnake[0][1] - 1;
    if (newPixelj < 0) {
      newPixelj = N - 1;
      outsideGrid = true;
    }
    let newPixel = [newPixeli, newPixelj];
    newSnake.unshift(newPixel);
  } else if (direction === "right") {
    newSnake.pop();
    newPixeli = oldSnake[0][0];
    newPixelj = oldSnake[0][1] + 1;
    if (newPixelj > N - 1) {
      newPixelj = 0;
      outsideGrid = true;
    }
    let newPixel = [newPixeli, newPixelj];
    newSnake.unshift(newPixel);
  } else if (direction === "up") {
    newSnake.pop();
    newPixeli = oldSnake[0][0] - 1;
    newPixelj = oldSnake[0][1];
    if (newPixeli < 0) {
      newPixeli = N - 1;
      outsideGrid = true;
    }
    let newPixel = [newPixeli, newPixelj];
    newSnake.unshift(newPixel);
  } else if (direction === "down") {
    newSnake.pop();
    newPixeli = oldSnake[0][0] + 1;
    newPixelj = oldSnake[0][1];
    if (newPixeli > N - 1) {
      newPixeli = 0;
      outsideGrid = true;
    }
    let newPixel = [newPixeli, newPixelj];
    newSnake.unshift(newPixel);
  }
  let tempId = newPixeli + " " + newPixelj;

  if (outsideGrid || document.getElementById(tempId).className == "snake") {
    direction = "stop";
    newSnake = initialSnakecopy;
    highScore();
    resetCanvas();
  }

  if (document.getElementById(tempId).className === "candy") {
    newSnake.push(oldSnake[oldSnake.length - 1]);
    addScore();
  }

  drawSnake(oldSnake, newSnake);
  initialSnake = newSnake;
  setTimeout(moveSnake, 50);
}

moveSnake(); // Start the movement
