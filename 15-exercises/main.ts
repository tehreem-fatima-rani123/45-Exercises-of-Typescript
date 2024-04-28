let guestList = ["shahjahan","noman","sultan","khushboo"];

let dontCome = guestList[0];

console.log(dontCome,"nahi a sakta");

guestList.splice(0, 1, "shamah");

guestList.forEach(guest => console.log(`SALAM ${guest}, WOULD YOU LIKE TO DINNER WITH ME?`));