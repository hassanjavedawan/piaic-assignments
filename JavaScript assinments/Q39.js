//  Q39 -- City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:



const city_country =(city,country) =>{
    var combine  = `"${city}, ${country}"`;
    console.log(combine);
return combine
}

city_country("Housten","american")
city_country("Istanbul","Turkey")
city_country("dehli","India")