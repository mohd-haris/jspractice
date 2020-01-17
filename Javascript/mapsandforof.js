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

console.log(users)
console.log(users.size)  //We can check number os entries in the Map which is not possible in th object

console.log(users.get('sam sung').name) //This is used to get any entry in the map by it's key

console.log(users.keys())  // This gives us Iterable Iterator of keys

console.log(users.values()) //This gives us Iterable Iterator of values

for (const values of users.values()) {      //This is a for of loop for accessing values given by Iterable from users.values()
    console.log(values.name)
}

for (const [key,values] of users.entries()) {  //User.entries() gives us an Iterable Iterator for all entries in Map()
    console.log(`Key: ${key} and value: ${values.name}`)
}

users.forEach((value, key) => console.log(`Key: ${key} and value: ${value.name}`)) //Using the earlier ForEach loop