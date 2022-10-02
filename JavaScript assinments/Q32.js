/** @format */

//  Q32 --  Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

let current_users = ["Admin", "Hassan", "Ali", "Raza", "sabir"];
let new_users = ["hassan", "ali", "qasim", "ameer"];

let username = prompt("Enter username");

for (var i = 0; i < current_users.length; i++) {
  if (current_users[i].toLocaleLowerCase() === username) {
    console.log(`${username} already taken`);
    break;
  } else {
    console.log(`${username} is available`);
    // break;
  }
}

