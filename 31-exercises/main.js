var userName = ["Mahad", "ali", "zeeshan", "Admin", "usman"];
userName = [];
if (userName.length === 0) {
    console.log("Your Array in Empty We Need To Find Some Users!");
}
else {
    //Using ForEach Loop on Array 
    userName.forEach(function (oneuser) {
        if (oneuser === "Admin") {
            console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneuser, ", thank you for logging in again."));
        }
    });
}
