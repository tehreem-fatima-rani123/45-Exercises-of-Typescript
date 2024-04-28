var guestList = ["shahjahan", "noman", "sultan", "khushboo"];
var dontCome = guestList[0];
console.log(dontCome, "nahi a sakta");
guestList.splice(0, 1, "shamah");
guestList.forEach(function (guest) { return console.log("SALAM ".concat(guest, ", WOULD YOU LIKE TO DINNER WITH ME?")); });
