/** @format */

//  Q30 --  Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user

let userName = ["admin", "hassan", "ali", "raza", "sabir"];
let otherUser = prompt("enter username");
for (let i = 0; i < userName.length; i++) {
  if (otherUser === "admin") {
    alert("Hello admin, would you like to see a status report?");
    break;
  } else if (otherUser === userName[i]) {
    alert(`Hello ${otherUser}, thank you for logging in again`);
    break;
  } else {
    alert("please create your account");
    break;
  }
}
