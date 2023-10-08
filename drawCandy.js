export default function (x, y) {
  let pixelLocation = x + " " + y;
  document.getElementById(pixelLocation).style.backgroundColor = "red";
  document.getElementById(pixelLocation).className = "candy";
  console.log("yayyy candy");
}
