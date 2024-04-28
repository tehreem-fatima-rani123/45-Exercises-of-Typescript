"use strict";
// define a function to print each magician name from an array
function show_magician(magician) {
    magician.forEach(name => console.log(name));
}
//function ti make magicain  great through .map() it will modify array
function make_great(magician) {
    return magician.map(name => `The Great ${name}`);
}
//Define an array containing magicians name
let magician_names = ["Harry Poter", "Hamza", "Usama"];
// making a copi of orignal array through .slice() function 
let copy_magician_name = magician_names.slice();
// modify the copied array inclued "the Great"with thire names
let copy_great_magicians = make_great(copy_magician_name);
// show both arrays orignal and copied
// oergnal
console.log("orignal Array\n");
show_magician(magician_names);
//copied 
console.log("copied Array\n");
show_magician(copy_great_magicians);
