// Q10 --  Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does


//  concat function
function fullname() {
    // Get user first name like Hassan
    var firstName = prompt("Enter Your first name");

    // Get user last name like  Javed
    var lastName = prompt("Enter your last name");

    // concat first name and last name = Hassan Javed
    var fullname = firstName + " " + lastName;
    return fullname;
}
console.log(fullname())