/** @format */

//  Q36 -- T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

const make_shirt = (size,text) => {
  let order = {
    size,
    text,
  };
  console.log(order);
  return order
};

make_shirt("medium","Grow together")
