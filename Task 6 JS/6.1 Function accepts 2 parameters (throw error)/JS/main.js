function myFun (x,y){
    if (arguments.length !== 2){
        throw new Error('myfun accepts only 2 parameters')
    }
    console.log("Hello");
}

// myFun("xArgument","yArgument", "zArgument")
myFun("xArgument","yArgument")