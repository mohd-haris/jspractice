const sayHello = (name) => console.log(`Hey, ${name}!`)

sayHello('Haris')


const nTodos = [{
    title : 'Get up!',
    isDone: true
}, {
    title: 'Go for walk',
    isDone: true
}, {
    title: 'Have Breakfast',
    isDone: false
}]

const thingsDone = nTodos.filter((todo) => {
    return todo.isDone === true
})

console.log(thingsDone)