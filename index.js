var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
var randomNumber2 = (Math.floor(Math.random() * 6) + 1);
var firstDice = randomNumber1
var secondDice = randomNumber2
document.querySelectorAll(".dice")[0].classList.add("first-dice");
document.querySelectorAll(".dice")[1].classList.add("second-dice");
document.querySelector(".first-dice img").setAttribute("src", "images/dice" + firstDice + ".png");
document.querySelector(".second-dice img").setAttribute("src", "images/dice" + secondDice + ".png");
if (firstDice > secondDice) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}
else if (firstDice < secondDice) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
else {
  document.querySelector("h1").innerHTML = "Draw!"
}
