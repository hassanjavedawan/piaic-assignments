//  Q43 -- Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician  = ["Stvl", "cort","vims", "omor"]


const make_great =(magician) =>{
    // without  the great text
    console.log(magician);

    // with  the great text

    magician.forEach(element => {        
    console.log(" the great " + element)
});
}

make_great(magician)