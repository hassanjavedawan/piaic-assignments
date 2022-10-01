//  Q17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

let arr = ["Ali","umar","Sabir","Jamil","suleman"];

console.log("sorry, we can only invite two people to dinner");

for (let index = 0; index < arr.length; index++) {
    arr.pop()
    if (arr.length == 2) {
        console.log(`${arr[0]} please come to dinner` );
        console.log(`${arr[1]} please come to dinner` );

    }

    

    
}