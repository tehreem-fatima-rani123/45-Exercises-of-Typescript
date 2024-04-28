// creating Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using for+loop
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var oneNumbers = numbers_1[_i];
    var ordinalending = void 0;
    if (oneNumbers === 1) {
        ordinalending = "st";
    }
    else if (oneNumbers === 2) {
        ordinalending = "nd";
    }
    else if (oneNumbers === 3) {
        ordinalending = "rd";
    }
    else {
        ordinalending = "th";
    }
    console.log("".concat(oneNumbers).concat(ordinalending));
}
