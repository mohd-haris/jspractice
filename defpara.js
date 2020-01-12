//This is to learn about Default Parameters in JavaScript

let myMultiplier = function(num1, num2){
    
    return num1*num2    //try to reduce line number as much as possible
}

let guestUser = function (name = 'NoName', courseCount = 0/*Here we set up default Parameters*/){
    //If no parameter is passed, default parameters comes into action.
    console.log('Hello! ' + name + ' Your course count is ' + courseCount)
}

guestUser('Ram') // Here we are not giving second parameter
                 // Now, for course count the default paramter i.e., =0

