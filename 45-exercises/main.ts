//Defune a function ato creat a car object with optional options ...
function create_car(manufacturer, model, ...option){
    // Initalize a car object with manufacturer and modal
    let car = {
    manufacturer: manufacturer,
    model: model,
    };
    
    //add addiyional options to the car object
    option.forEach(option => {
    
        let [key, value] = option.split(":");
        car[key. trim()] = value.trim();
    });
    
    
    return car;
    }
    
    //call the function to creat a car object
    let my_car = create_car("Toyot","Corrolla", "color: black","Sunroof: True", "Year: 2024");
    
    // print the variable to ensure all the information is stored correctlly in the car object 
    console.log(my_car);