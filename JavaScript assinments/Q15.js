//  Q15 -- Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


let arr = ["Hassan","umar","Jamil","suleman"]
console.log(arr);

// this person not join dinner
let notCome = arr.shift();

// remain Guest
console.log(arr);


// add invite new Guest

let addNew = arr.unshift("Ali")
console.log(arr);
arr.forEach(element => {
    console.log(`${element} please come to dinner` );
});