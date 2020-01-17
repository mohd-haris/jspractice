//Learning to use functions in JavaScript

let sayHello = function(name){
    console.log(`hello ${name}`)
    console.log(`greetings for the day to ${name}`)

}

// sayHello('John')

let fullNameMaker = function(firstName,lastName){
    console.log('Hello!')
    console.log(`Concatenate ${firstName} ${lastName}`)
}

// fullNameMaker('Jane','Doe')

let myAdder = function(num1,num2){
     let result = num1 + num2
    return result
}

//todo make it one line
let resultOfAdd = myAdder(2,3)
console.log(resultOfAdd)
