// Q24 -- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:



// Test for equality  
let person = "ali";
person === "ali" ? console.log(true):console.log(false);


// test for inequality with strings
let user = "hassan";
 user != "hassam" ? console.log(true):console.log(false);




// Tests using the lower case function
let userName = "Hassan"
userName === userName.toLocaleLowerCase ? console.log(true):console.log(false);






// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

var time = +prompt("Enter now time");

if (time >= 0000 && time < 1200) {
    console.log("Good Morning!")
}
else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon!")
}
else if (time >= 1700 && time < 2100) {
    console.log("Good Evening!")
}
else if (time >= 2100 && time <= 2359) {
    console.log("Good Night!")
}
else {
    console.log("please enter coreect time")
}



// Tests using "and" and "or" operators
let studentName = "Hassan Javed";
let Course = "Metaverse";

if (studentName  === "Hassan Javed" || Course === "Web3" ) {
    console.log("Please wait");
}

 if (studentName  === "Hassan Javed" &&  Course === "Metaverse" ) {
    console.log("you can join class ");
}


// Test whether an item is in a array

let Vegetable = ["Potato","Tomato","Garlic","Beans","Pumpkin"]

if (Vegetable.includes("Potto")) {
    console.log("yes");
}else{
    console.log("no");

}

// Test whether an item is not in a array


if (Vegetable.indexOf("Potto") != -1) {
    console.log("yes");
}else{
    console.log("no");

}
