var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);
var comChoice = choices[i];
var userPoints = 0;
var comPoints = 0;

function score() {
  let score_div = (document.getElementById("score").innerHTML =
    userPoints + " - " + comPoints);
}

setInterval(score, 50);

function convert(word) {
  if (word === "paper") return '<i class="far fa-hand-paper"></i>';
  if (word === "rock") return '<i class="far fa-hand-rock"></i>';
  return '<i class="far fa-hand-scissors"></i>';
}

const game = (userChoice) => {
  var box = document.getElementById("challenge");
  box.style.display = "inline-flex";
  var userDiv = document.getElementById("yourObject");
  userDiv.innerHTML = convert(userChoice);
  var comDiv = document.getElementById("comObject");
  comDiv.innerHTML = convert(comChoice);
};
