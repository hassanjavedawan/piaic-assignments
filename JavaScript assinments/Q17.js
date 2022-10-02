//  Q17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

let arr = ["Ali","umar","Sabir","Jamil","suleman"];

console.log("sorry, we can only invite two people to dinner");

for (let index = 0; index < arr.length; index++) {
    arr.pop()
    if (arr.length == 2) {
        console.log(`${arr[0]}  you guys are still invited` );
        console.log(`${arr[1]}  you guys are still invited` );

    }
}

//  deleting both of them and at the end it shows empty list. 
while(arr.length > 0) {
    arr.pop();
}
console.log(arr);


