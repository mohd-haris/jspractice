const myTodos = [{
    title: 'Buy Bread',
    isDone: false,
}, {
    title: 'Go To Walk',
    isDone: false,
}, {
    title: 'Have Breakfast',
    isDone: true,
}]

const findTodo = function(anytdodo, title){
    const index = anytdodo.findIndex(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })

    return index
}


console.log(`Found at index: ${findTodo(myTodos,'Have Breakfast')}`)

