//  Q42 -- Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician  = ["Sami", "akbar","yasin", "jamil","Ameer","umar"]



// Print the name of each magician 
const show_magicians =(show_magicians) =>{

    show_magicians.forEach(element => {
    console.log(element)
});
}

show_magicians(magician)



// add it to great_magicians.

const make_great =(show_magicians) =>{

    show_magicians.forEach(element => {
    console.log(" The great " + element)
});
}

make_great(magician)