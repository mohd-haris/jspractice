const myToDos = []

myToDos.push('Wake up')
myToDos.push('Brush your teeth')
myToDos.push('Go for walk')

myToDos.forEach(function(toDo, index){
    console.log(`Your task no. ${index} is ${toDo} `)
})

const myNewTodo = []

myNewTodo.unshift('Task 3')
myNewTodo.unshift('Task 2')
myNewTodo.unshift('Task 1')

for (let index = 0; index < myNewTodo.length; index++) {
    console.log(myNewTodo[index])
    
}
