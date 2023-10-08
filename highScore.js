export default function highScore() {
  let highScoreString = document.getElementById("high-score").innerHTML;
  let currentScoreString = document.getElementById("current-score").innerHTML;
  let newhighScore = Math.max(
    parseInt(currentScoreString),
    parseInt(highScoreString)
  );
  document.getElementById("high-score").innerHTML = newhighScore + "";
  //   console.log(newhighScore);
}
