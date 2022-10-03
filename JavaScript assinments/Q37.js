//  Q37 -- Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


const make_shirt = (size="Large" ,meesage= "I love JavaScript") => {
    let order = {
      size,
      meesage,
    };
    console.log(`You make ${size} t-shirt for me. \nThe message printed on it '${meesage}'`);
    return order
  };
  
  make_shirt()
  make_shirt("medium")
make_shirt("small","Grow together")
