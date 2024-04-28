// Making a array of countries and print its orginal order
let countriesToVisit: string[] =["China","Denmark","Brazil","Argentina"];
console.log("Orginal Order:", countriesToVisit)

// print the array in Alphabetical oeder without modifying the actul array List
console.log("Alphabetical Order:",[...countriesToVisit].sort());

// show that the array is still in its orignal order 
console.log("Still in Orginal Order:", countriesToVisit);

// print the array and Reversed oedre without modifying the actual array list
console.log("Reverse Order:",[...countriesToVisit].reverse());

// show that the array is still in its orignal order
console.log("Still in Orignal Order:",countriesToVisit);

// we have changedthe orignal array order now
console.log("Orignal Array Reversed:", countriesToVisit.reverse());

// print the array to show that it's back to its orignal order
console.log("Back to Orignal Order:",countriesToVisit.reverse());

// print te array to show that its order has been changed in alphabetical order now
console.log("Sorted in Alphabetical Order:",countriesToVisit.sort());

// we have changed again the orignal array order now in reverse order again
console.log("Orignal Array Reversed Again:",countriesToVisit.reverse());

