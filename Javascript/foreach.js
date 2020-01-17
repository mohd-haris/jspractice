//Learning about for each loop in JavaScript
 const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

console.log(days[0])

let sayHello = function(){
    console.log('hello')

}

days.forEach(sayHello) //this runs sayHello function for each element of days
days.forEach(function(day, index){ // first element would be the element of array and second element would be index
    console.log(`Starts with ${index + 1} -- ${day}`)
})

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

months.forEach(function(month, indexx)
{
    console.log(`${indexx+1} number month of the year is ${month}`)
}

)








