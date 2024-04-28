// Array  of current user
var current_user = ["Khushboo", "Noman", "Naina", "Ayesha", "Sultan"];
// Array of new user
var new_users = ["Shahjhan", "Noman", "Sultan", "Mustafa", "Ahmed"];
// Loop through new-users to chack for username avaibility
new_users.forEach(function (new_one_user) {
    // Making  a condition for usernme already exist and save in our_condition variable
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase(); });
    //print different meassage using if-else statment
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already takenl"));
    }
    else {
        console.log("This UserName ".concat(new_one_user, ", is avalibale"));
    }
});
