// define a function to print each magician name from an array
function show_magician(magician: string[]){
    magician.forEach(name => console.log(name));
}

//Define an array containing magicians name
let magician_names = ["Harry Poter","Hamza","Usama"]

//call the function

 show_magician(magician_names);