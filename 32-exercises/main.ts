// Array  of current user
let current_user = ["Khushboo","Noman","Naina","Ayesha","Sultan"]
// Array of new user
let new_users = ["Shahjhan","Noman","Sultan","Mustafa","Ahmed"]

// Loop through new-users to chack for username avaibility

new_users.forEach(new_one_user =>{

    // Making  a condition for usernme already exist and save in our_condition variable
    let our_condition = current_user.some(current_one_user => current_one_user.toLocaleLowerCase()=== new_one_user.toLocaleLowerCase());

    //print different meassage using if-else statment
    
if(our_condition){
    console.log(`sorry ${new_one_user} is already takenl`)
}else{
    console.log(`This UserName ${new_one_user}, is avalibale`)
}

})