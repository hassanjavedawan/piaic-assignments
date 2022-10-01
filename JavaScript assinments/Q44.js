// Q 44 -- Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


const order = (...extra)=>{
let Sandwiche = extra
console.log(Sandwiche);
return Sandwiche 
}


order(1,"ketchup","souce")
order(2,"without ketchup","add souce")
order(3,"ketchup","without souce")