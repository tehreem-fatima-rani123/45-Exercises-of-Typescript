// creating a Guest list Array

let guestList = ["HAMZA","HASNEN","AYESHA","SAYBA"];

// making Variable for guest who cant come

let dontCome = guestList[0];

// print the name of who cant come
console.log(dontCome,"nahi a sakta he ");

// add or rimove of valuesnfrom array
guestList.splice(0, 1, "ahmed");

// message ptint for bigger table
console.log("GOOD NEWS ! WE HAVE FOUND A BIGGER TABLE FOR  DINNER.");

// adding a new value at staring index of array 
guestList.unshift("nanni ayesha");

// adding a new value at ending index of array
guestList.push("naina");

//  Gat a middle Index our guest list of array
let middleIndex: number = Math.floor(guestList.length / 2 );

//  adding a new guest at middlecindex of array
guestList.splice(middleIndex, 0, "shanza");

// print message of Updated List
console.log("Updated List oue Guests");

// sending invitation message to our guest one by one with thier names  
guestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me ?`));