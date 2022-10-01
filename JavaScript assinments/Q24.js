// Q24 -- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:



// Tests for equality and inequality with strings
let num = 10;
var check = num === 10 ? "Correct anwser":"InCorrect anwser";
var check = num != 10 ? "Correct anwser":"InCorrect anwser";




// Tests using the lower case function
let userName = "Hassan"
var check = userName.toLocaleLowerCase ? "Correct anwser":"InCorrect anwser";
console.log(check);




// Tests using "and" and "or" operators
let studentName = "Hassan Javed";
let Course = "Metaverse";

if (studentName  === "Hassan Javed" || Course === "Web3" ) {
    console.log("Please wait");
}

 if (studentName  === "Hassan Javed" &&  Course === "Metaverse" ) {
    console.log("you can join class ");
}





// Ngreater than and less than, greater than or equal to, and less than or equal to
var T = 32;
if (T > 40) {
    console.log("It is too hot outside")
}
else if (T > 30) {
    console.log("The Weather today is Normal")
}

else if (T > 20) {
    console.log("Today’s Weather is cool")
}

else if (T > 10) {
    console.log("OMG! Today’s weather is so Cool")
}



