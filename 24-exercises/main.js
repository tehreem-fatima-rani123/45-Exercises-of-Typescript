"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//define vareable
let apple = "apple";
let uppercaseapple = "apple";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
//Test for equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not  equal to apple?");
console.log(apple != "apple");
//Test useing lowercase function
console.log("\nIs Apple is equal to apple after converting to lowercase?");
console.log(uppercaseapple.toLocaleLowerCase() == "apple");
console.log("\nIs Apple is not  equal to apple after converting to lowercase?");
console.log(uppercaseapple.toLocaleLowerCase() != "apple");
//numerical tests
//Equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
// not equal to
console.log("Is ten is not equal to twenty?");
console.log(ten != twenty);
//Greater then
console.log("\nIs ten is greater then zero?");
console.log(ten > 0);
// less then
console.log("\nIs twenty is less then 10");
console.log(twenty < 10);
// Greater then or equal to
console.log("\nIs ten is greater then or equal to 5?");
console.log(ten >= 5);
// Less then  or  equal to
console.log("\nIs twenty is less then or equal to 10?");
console.log(twenty <= 10);
//tests useing "and" & "or" operators
//useing  && (and)
console.log("\ntwenty is not equal to ten and twenty is greater then 10");
console.log(twenty != 10 && twenty > 10);
console.log("\ntwenty is not equal to ten and twenty is greater then 10");
console.log(twenty != 10 && twenty > 30);
// useing || (or)
console.log("\n20is greater then 50 or 20 is equal to 20 ");
console.log(20 > 50 || 20 == 20);
console.log("\n20is greater then 50 or 20 is not equal to 20 ");
console.log(20 > 50 || 20 != 20);
// Test whether an item is include in array 
console.log("\nis orange include in my Fruits array");
console.log(fruits.includes("orange"));
// not include
console.log("\nis orange not include in my Fruits array");
console.log(!fruits.includes("orange"));
// // Equal to
// console.log("\nIs ten is equal to twenty?");
// console.log()
// // not Equal to 
// console.log("\nIs ten is not equal to twenty?");
// console.log();
// // Greater then 
// console.log("\nIs ten is greater then Zero?");
// console.log();
// // Less then  
// console.log("\nIs twenty is less then 10?");
// console.log();
// // Greater then or equal to
// console.log("\nIs ten is greater then or equal to 5?");
// console.log();
// // Less then  or  equal to
// console.log("\nIs twenty is less then or equal to 10?");
// console.log();
