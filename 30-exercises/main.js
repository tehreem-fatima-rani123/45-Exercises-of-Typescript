// creating a array
var userName = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
//Using ForEach Loop on Array 
userName.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneuser, ", thank you for logging in again."));
    }
});
