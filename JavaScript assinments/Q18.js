/** @format */

//  Q18 -- Seeing the World: Think of at least five places in the world you’d like to visit.

let city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Pashawar"];

//   array in original order

console.log(city);

//   array in alphabetical order

console.log(city.sort());




//   Reverse the order of your list.l
console.log(city.reverse());


//    list to show it’s back to its original order
console.log(city.sort());

//  Print the array to show that its order has been changed.

city.forEach(element => {
    console.log(element);
});



//  Print the reverse array to show that its order has been changed.

city.reverse().forEach(element => {
    console.log(element);
});






