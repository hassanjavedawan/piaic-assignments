//  Q43 -- Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician  = ["Sami", "akbar","yasin", "jamil","Ameer","umar"]


const make_great =(magician) =>{
    
//  create new array with great message
    let great_magicians = [];
    for (let i = 0; i < magician.length; i++) {
        const element = magician[i];
        great_magicians.push(element + "the great")
    
    }

    great_magicians.forEach(element => {
       console.log(element); 
    });

    // original array

    magician.forEach(element => {        
    console.log( element)
});
}

make_great(magician)