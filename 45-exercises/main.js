//Defune a function ato creat a car object with optional options ...
function create_car(manufacturer, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    // Initalize a car object with manufacturer and modal
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //add addiyional options to the car object
    option.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//call the function to creat a car object
var my_car = create_car("Toyot", "Corrolla", "color: black", "Sunroof: True", "Year: 2024");
// print the variable to ensure all the information is stored correctlly in the car object 
console.log(my_car);
