function make_shirt (size:string = "Large", printmessage: string = " I LOVE TYPESCRIPT"){
    console.log(`creating a ${size} shirt with the ${printmessage} print on shirt`)
}

// calling a function with by defualt values
make_shirt();


// calling a funcation now with Medium Size and defualt message

make_shirt("Medium")


//calling a function now with small size and also Different print message

make_shirt("Small", "I LOVE JAVASCRIPT")

