//  Q28 --- Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

let person = prompt("enter your age")

if(person < 2  ){
    console.log("person is a baby");
}
else if(person > 2  && person < 4){
    console.log("person is a toddler");
}
else if(person > 4 && person < 13  ){
    console.log("person is a kid");
}
else if(person >13 && person < 20  ){
    console.log(" person is a teenager");
}
else if(person >20 && person < 65  ){
    console.log("person is an adult");
}
else{
    console.log("person is an elder");
}


