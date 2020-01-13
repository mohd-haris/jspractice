const sayHello = (name) => console.log(`Hey, ${name}!`)

sayHello('Haris')


const myTodos = [{
    title: 'Get up',
    isDone: true
},{
    title: 'Go to walk',
    isDone: true
},{
    title: 'Have breakfast',
    isDone: false
}]

const thingsDone = myTodos.filter((todo) => {
    return todo.isDone === true
})

console.log(thingsDone)