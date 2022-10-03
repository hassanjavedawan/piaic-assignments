//  Q15 -- Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


let arr = ["Hassan","umar","Jamil","suleman"]
console.log(arr);

// this person not join dinner
console.log(` Sorry, ${arr[0]} can't make it to dinner.`);
arr.shift();


// add invite new Guest

arr.unshift("Ali")


arr.forEach(element => {
    console.log(`${element} please come to dinner` );
});