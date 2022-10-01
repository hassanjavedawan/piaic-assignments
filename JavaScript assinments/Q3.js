// Q3  Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const userName = prompt("Enter your name!","")

// lowercase
console.log(`person’s name in lowercase: ${userName.toLocaleLowerCase()}`);

// uppercase
console.log(`person’s name in uppercase: ${userName.toLocaleUpperCase()}`);

// titlecase
var firstchar = userName.slice(0,1);
var othercase = userName.slice(1);
var titlecase = firstchar.toLocaleUpperCase() + othercase.toLocaleLowerCase();

console.log(`person’s name in titlecase: ${titlecase}`);
