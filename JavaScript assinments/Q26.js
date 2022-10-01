/** @format */

//  Q26 -- Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

var alien_color = prompt("chose color 'green', 'yellow'");

let check =
  alien_color === "yellow"
    ? alert("player just earned 5 points for shooting the alien")
    : alien_color != "yellow"
    ? alert("The version that fails will have no output")
    : alert("The version that fails will have no output");
