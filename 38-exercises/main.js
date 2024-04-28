"use strict";
// creating a function
function describe_city(city, country = "Pkistan") {
    console.log(`${city} is in ${country}`);
}
//calling the function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
