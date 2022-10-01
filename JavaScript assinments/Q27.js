/** @format */

//  Q27 --- Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

var alien_color = prompt("chose color 'green', 'yellow' or 'red'");

let check =
  alien_color === "green"
    ? alert("player earned 5 points")
    : alien_color === "yellow"
    ? alert("player earned 10 points")
    : alien_color === "red";
alert("player earned 15 points");
