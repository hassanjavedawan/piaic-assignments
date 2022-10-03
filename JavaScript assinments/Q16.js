//  Q16 -- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let arr = ["Ali","umar","Jamil","suleman"];

let inform = "Got a bigger table!, so we can invite three more guest."
console.log(inform);

// Add one new guest to the beginning of  array
arr.unshift("Sakib","Sami");


// Add one new guest to the middle of your array. 
arr.splice(2,0,"akbar") // •  append() function use in python  and javascript use in splice function 


// 
arr.forEach(element => {
    console.log(`${element} please come to dinner`);
});

