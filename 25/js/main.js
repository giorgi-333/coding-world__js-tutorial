

const todoList = []




function addToTodo() {
    todoList.push(todoInput.value)
    
    res.innerHTML = ""

    todoList.forEach((todo, i) => {
        res.innerHTML += `${i+1}) ${todo}<br>`
    })

    todoList.length = 0
    console.log(todoList)

}


