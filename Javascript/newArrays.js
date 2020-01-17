const array1 = ['one', 'two', 'three', 'four', 'five']


// at anywhere

array1[1]='nottwo'

console.log(array1)

//start

console.log(array1.shift())

console.log(array1)

array1.unshift('newone')
console.log(array1)
//end

console.log('Element to be deleted is ' + array1.pop())
console.log(array1)

array1.push('newFive')

console.log(array1)

// splice

array1.splice(2, 1, 'newThree')
