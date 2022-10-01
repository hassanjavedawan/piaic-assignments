//  Q42 -- Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician  = ["Stvl", "cort","vims", "omor"]


const make_great =(magician) =>{
    magician.forEach(element => {
    console.log(" the great " + element)
});
}

make_great(magician)