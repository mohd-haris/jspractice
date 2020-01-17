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

const findTodo = function(anytdodo, title){         //Using findIndex
    const index = anytdodo.findIndex(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase() //This return the index
    })

    return index
}


console.log(`Found at index: ${findTodo(myTodos,'Have Breakfast')}`)

const nfindToDo = function(anytdodo, title){            //Using find
    const res = anytdodo.find(function(todo, index){

        return todo.title.toLowerCase() === title.toLowerCase()
    })

    return res
}

console.log(nfindToDo(myTodos,'Have Breakfast'))