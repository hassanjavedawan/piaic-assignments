/** @format */

//  Q26 -- Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

let alien_color1 = "green";
let alien_color2 = "yellow";

let check =
  alien_color1 === "green"
    ? alert("player just earned 5 points for shooting the alien")
    : alien_color2 === "yellow"
    ? alert("player just earned 10 points")
    : alert("no color match");
