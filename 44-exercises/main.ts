// Define a function with a rest parametarthat accept items arugments representing our sendwich
function makesendwich(...items: string[]){
console.log("\nMaking a sendwich with the following items:\n")
items.forEach(singleItem => console.log("-" + singleItem));
console.log("\nNow Enjoy Sandwich\n");

}
//call the function 3 times with 3 different number of argiments
makesendwich("Chiken","Cheese","Mayo","Egg");

makesendwich("Bread","Butter");

makesendwich("Chiken","Cheese","Mayo","Egg","Bread","Butter","Lettuce","Tomato","onion");



