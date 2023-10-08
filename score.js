export default function addScore() {
  let currentScoreString = document.getElementById("current-score").innerHTML;
  let currentScore = parseInt(currentScoreString) + 1;
  document.getElementById("current-score").innerHTML = currentScore + "";
  console.log(currentScore);
}
