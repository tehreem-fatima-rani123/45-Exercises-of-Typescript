let userName = ["Mahad","ali","zeeshan","Admin","usman"];
// Remove all values from our Array Now our Array is empty?
userName = []
// if statment for checking lenght of our Array is empty?
if(userName.length === 0){
    console.log("Your Array in Empty We Need To Find Some Users!")
}else{
    //Using ForEach Loop on Array 
userName.forEach(oneuser =>{
    if(oneuser === "Admin"){
console.log(`Hello ${oneuser}, would you like to see a status report?`)
    }else{
        console.log(`hello ${oneuser}, thank you for logging in again.`)
    }
}) 
}