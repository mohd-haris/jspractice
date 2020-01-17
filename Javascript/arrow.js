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

const thingsDone = myTodos.filter((todo) =>todo.isDone === true)
const thingsNotDone = myTodos.filter((todo) =>todo.isDone === false)

console.log(thingsDone)
thingsDone.forEach((todo, index) => console.log(todo.title))

console.log(myTodos)