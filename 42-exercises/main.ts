// define a function to print each magician name from an array
function show_magician(magician: string[]){
    magician.forEach(name => console.log(name));
}
  
//function ti make magicain  great through .map() it will modify array
function make_great(magician: string[]){
     return magician.map(name => `The Great ${name}`);
}
//Define an array containing magicians name
let magician_names = ["Harry Poter","Hamza","Usama"]


//call make_great function modify magicains names
let great_magicain = make_great(magician_names);

//call show_magicain that show modified list of magicains 
show_magician(great_magicain);