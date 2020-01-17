let sam = {
    name: 'I am Sam',
    age: 21,
    isActive: true
}

let john = {
    name: 'I am John',
    age: 23,
    isActive: true
}

let marry = {
    name: 'I am Marry',
    age:29,
    isActive: false
}

let users = new Map()
users.set('sam sung', sam)  // This is used to add entries in the for key-value pair
users.set('john doe', john) // in Map which is users.
users.set('marry jane', marry)

console.log(users.entries())


// for (const [key,values] of users.entries()) {  //User.entries() gives us an Iterable Iterator for all entries in Map()
//     console.log(`Key: ${key} and value: ${values.name}`)
// }
users.forEach((value,key)=>console.log(`Key: ${key} and Value: ${value.name}`))