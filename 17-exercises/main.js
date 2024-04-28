// creating a Guest list Array
var guestList = ["HAMZA", "HASNEN", "AYESHA", "SAYBA"];
// making Variable for guest who cant come
var dontCome = guestList[0];
// print the name of who cant come
console.log(dontCome, "nahi a sakta he ");
// add or rimove of valuesnfrom array
guestList.splice(0, 1, "ahmed");
// message ptint for bigger table
console.log("GOOD NEWS ! WE HAVE FOUND A BIGGER TABLE FOR  DINNER.");
// adding a new value at staring index of array 
guestList.unshift("nanni ayesha");
// adding a new value at ending index of array
guestList.push("naina");
//  Gat a middle Index our guest list of array
var middleIndex = Math.floor(guestList.length / 2);
//  adding a new guest at middlecindex of array
guestList.splice(middleIndex, 0, "shanza");
// print message of Updated List
console.log("Updated List oue Guests");
// sending invitation message to our guest one by one with thier names  
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me ?")); });
// inform that only two guests can be invited for dinner 
console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite tow guests to dinner with me ");
// using while-loop to rimove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
console.log("invitations to the last 2 Guests ");
guestList.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ",  you are still invited to dinner")); });
// Rimoveing Last  two Guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
