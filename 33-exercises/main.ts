 // creating Array
 let numbers = [1,2,3,4,5,6,7,8,9];

  //using for+loop
  for(let oneNumbers  of numbers){
    let ordinalending: string;



    if(oneNumbers === 1){
ordinalending = "st"
    }
   else if(oneNumbers === 2){
ordinalending = "nd"
   }
 else if(oneNumbers === 3){
    ordinalending = "rd"
       }
else {
        ordinalending = "th"
           }
console.log(`${oneNumbers}${ordinalending}`);
  }
