/** @format */

//  Q31 -- No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

let userName = ["admin", "hassan", "ali", "raza", "sabir"];


if (userName.length === 0 ) {
    console.log("We need to find some users!")
}

while(userName.length > 0) {
    userName.pop();
}

console.log(userName);

